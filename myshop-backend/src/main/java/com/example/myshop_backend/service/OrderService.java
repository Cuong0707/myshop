package com.example.myshop_backend.service;

import java.util.List;
import java.util.Optional;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.enums.OrderStatus;

public interface OrderService{
	OrderDto creaOrder(OrderDto orderDto);
	OrderDto getOrderById(Integer orderId);
	List<OrderDto> getAllOrders();
	OrderDto updateOrderStatus(Integer orderId, OrderStatus status);
}
