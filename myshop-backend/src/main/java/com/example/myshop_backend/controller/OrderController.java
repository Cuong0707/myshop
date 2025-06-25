package com.example.myshop_backend.controller;

import com.example.myshop_backend.dto.CheckoutRequest;
import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.enums.OrderStatus;
import com.example.myshop_backend.exceptions.ApiResponse;
import com.example.myshop_backend.exceptions.BadCredentialsException;
import com.example.myshop_backend.mapper.OrderMapper;
import com.example.myshop_backend.service.Impl.OrderServiceImpl;

import lombok.RequiredArgsConstructor;

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
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/checkout")
    public ResponseEntity<ApiResponse<PaymentLogDto>> checkout(@RequestBody CheckoutRequest request) {
        ApiResponse<PaymentLogDto> response = orderService.createOrder(request);
        System.out.println(ResponseEntity.status(response.getStatus()).body(response));
        return ResponseEntity.status(response.getStatus()).body(response);
    }
    @GetMapping("/{orderId}")
    public ResponseEntity<ApiResponse<OrderDto>> getOrderDetails(@PathVariable Integer orderId)
    {
    	ApiResponse<OrderDto> response = orderService.getOrderById(orderId);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
