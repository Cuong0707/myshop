package com.example.myshop_backend.service.Impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.enums.OrderStatus;
import com.example.myshop_backend.exceptions.NotFoundException;
import com.example.myshop_backend.mapper.OrderMapper;
import com.example.myshop_backend.mapper.ProductMapper;
import com.example.myshop_backend.reponsitory.OrderRepository;
import com.example.myshop_backend.service.OrderService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService{
	
	private OrderRepository orderRepository;
	
	@Override
	public OrderDto creaOrder(OrderDto orderDto) {
		Order order = OrderMapper.orderDtoToOrder(orderDto);
//		orderDto.setOrderStatus(OrderStatus.PENDING); // Mặc định là PENDING khi tạo đơn
        return OrderMapper.orderToDto(orderRepository.save(order));
	}

	@Override
	public OrderDto getOrderById(Integer orderId) {
		return OrderMapper.orderToDto(orderRepository.findById(orderId).
				orElseThrow(()-> new NotFoundException("Invalid Order Id: "+ orderId)));
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
