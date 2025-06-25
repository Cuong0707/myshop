package com.example.myshop_backend.service.Impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.CheckoutRequest;
import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.entity.OrderProduct;
import com.example.myshop_backend.entity.OrderProductKey;
import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.entity.PaymentMethod;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.entity.Users;
import com.example.myshop_backend.enums.OrderStatus;
import com.example.myshop_backend.exceptions.ApiResponse;
import com.example.myshop_backend.exceptions.BadCredentialsException;
import com.example.myshop_backend.exceptions.NotFoundException;
import com.example.myshop_backend.mapper.OrderMapper;
import com.example.myshop_backend.mapper.PaymentLogMapper;
import com.example.myshop_backend.mapper.ProductMapper;
import com.example.myshop_backend.reponsitory.OrderProductsRepository;
import com.example.myshop_backend.reponsitory.OrderRepository;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;
import com.example.myshop_backend.reponsitory.PaymentMethodRepository;
import com.example.myshop_backend.reponsitory.ProductRepository;
import com.example.myshop_backend.reponsitory.UserRepository;
import com.example.myshop_backend.service.OrderService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService{
	
	private final OrderRepository orderRepository;
	private final OrderProductsRepository orderProductsRepository;
	private final UserRepository userRepository;
	private final PaymentMethodRepository paymentMethodRepository;
	private final ProductRepository productRepository;
	private final PaymentLogRepository paymentLogRepository;
	@Override
	public ApiResponse<PaymentLogDto> createOrder(CheckoutRequest request) {
		BigDecimal amount = new BigDecimal('0');
		Optional<Users> userOtp = userRepository.findByEmail(request.getEmail());
        PaymentMethod method = paymentMethodRepository.findById(request.getPaymentMethod())
                .orElseThrow(() -> new NotFoundException("Payment method not found"));
        Order order = new Order();
        order.setUsers(userOtp.isEmpty()?null:userOtp.get());
        order.setPaymentMethod(method);
        order.setDeliveryAdress(request.getAddress());
        order.setDeliveryPhone(request.getPhone());
        order.setStatus(OrderStatus.PENDING);
        order = orderRepository.save(order);
        
        List<OrderProduct> orderProducts = new ArrayList<>();
        for (CheckoutRequest.ProductOrderDTO dto : request.getProducts()) {
            Product product = productRepository.findById(dto.getProductId())
                    .orElseThrow(() -> new NotFoundException("Product not found"));
            amount = amount.add(product.getPrice().multiply(BigDecimal.valueOf(dto.getQuantity())));

            OrderProductKey key = new OrderProductKey(order.getOrderId(), product.getProductId());
            OrderProduct op = new OrderProduct();
            op.setId(key);
            op.setOrder(order);
            op.setProduct(product);
            op.setQuantity(dto.getQuantity());
            op.setPrice(product.getPrice());
            orderProducts.add(op);
        }
        orderProductsRepository.saveAll(orderProducts);
        PaymentLog paymentLog = new PaymentLog();
        paymentLog.setOrder(order);
        paymentLog.setAmount(amount);
        paymentLog.setCurrency("VNĐ");
        paymentLog.setPaymentMethod(method);
        paymentLog.setStatus(order.getStatus());
        
        paymentLogRepository.save(paymentLog);
        
        PaymentLogDto paymentLogDto = PaymentLogMapper.paymentLogToDto(paymentLog);
        return ApiResponse.success(HttpStatus.OK, "Đơn hàng đã được cập nhật", paymentLogDto);
	}

	@Override
	public ApiResponse<OrderDto> getOrderById(Integer orderId) {
		OrderDto orderDto = OrderMapper.orderToDto(orderRepository.findById(orderId)
				.orElseThrow(()-> new NotFoundException("Not Found OrderId: "+orderId)));
		return ApiResponse.success(HttpStatus.OK, null, orderDto);
	}

	@Override
	public List<OrderDto> getAllOrders() {
		return orderRepository.findAll().stream().map(OrderMapper::orderToDto).collect(Collectors.toList());
	}

	@Override
	public OrderDto updateOrderStatus(Integer orderId, OrderStatus status) {
		Optional<Order> order = orderRepository.findById(orderId);
        if (order.isPresent()) {
            Order existingOrder = order.get();
            existingOrder.setStatus(status);
            return OrderMapper.orderToDto(orderRepository.save(existingOrder));
        }
        return null;
	}
	
}
