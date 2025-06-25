package com.example.myshop_backend.service;

import java.util.List;
import java.util.Optional;

import com.example.myshop_backend.dto.CheckoutRequest;
import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.enums.OrderStatus;
import com.example.myshop_backend.exceptions.ApiResponse;

public interface OrderService{
	ApiResponse<PaymentLogDto> createOrder(CheckoutRequest request);
	ApiResponse<OrderDto> getOrderById(Integer orderId);
	List<OrderDto> getAllOrders();
	OrderDto updateOrderStatus(Integer orderId, OrderStatus status);
}
