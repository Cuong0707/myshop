package com.example.myshop_backend.controller;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.enums.OrderStatus;
import com.example.myshop_backend.exceptions.ApiResponse;
import com.example.myshop_backend.exceptions.BadCredentialsException;
import com.example.myshop_backend.mapper.OrderMapper;
import com.example.myshop_backend.service.Impl.OrderServiceImpl;
import com.example.myshop_backend.service.OrderService;
import com.example.myshop_backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    // Tạo đơn hàng mới
    @PostMapping("/create")
    public ApiResponse<OrderDto> createOrder(@RequestBody OrderDto orderDto) {
        
        return ApiResponse.success(HttpStatus.CREATED,"Created",orderService.creaOrder(orderDto));
        
    }

    // Lấy thông tin một đơn hàng bằng ID
    @GetMapping("/{orderId}")
    public ApiResponse<OrderDto> getOrderById(@PathVariable Integer orderId) {
        return ApiResponse.success(HttpStatus.OK, "Product retrieved successfully", orderService.getOrderById(orderId));
        
    }

    // Lấy danh sách tất cả đơn hàng
    @GetMapping("/list")
    public ApiResponse<List<OrderDto>> getAllOrders() {
        List<OrderDto> orderDtos = orderService.getAllOrders();
        return ApiResponse.success(HttpStatus.OK, "Success", orderDtos);
    }

    // Cập nhật trạng thái đơn hàng
    @PutMapping("/{orderId}/status")
    public ApiResponse<OrderDto> updateOrderStatus(@PathVariable Integer orderId, 
                                                    @RequestParam OrderStatus status) {
        OrderDto orderDto = orderService.getOrderById(orderId)==null?null:orderService.updateOrderStatus(orderId, status);;
        return orderDto==null?ApiResponse.error(HttpStatus.NOT_FOUND, "Invalid Order Id:"+ orderId):
        	ApiResponse.success(HttpStatus.OK, "Success", orderDto);
        
 
    }

    // Xử lý thanh toán cho đơn hàng
    @PostMapping("/{orderId}/pay")
    public ApiResponse<?> processPayment(@PathVariable Integer orderId, 
                                            @RequestParam Integer paymentMethodId, 
                                            @RequestParam BigDecimal amount) {
        try {
            paymentService.processPayment(orderId, paymentMethodId, amount);
            return ApiResponse.success(HttpStatus.OK, "Payment processed successfully", null);
        } catch (BadCredentialsException e) {
            return ApiResponse.error(HttpStatus.BAD_REQUEST,"Payment processing failed: "+ e.getMessage());
        }
    }
}
