package com.example.myshop_backend.service;

import java.util.List;
import java.util.Optional;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.enums.OrderStatus;

public interface OrderService{
	Order creaOrder(OrderDto orderDto);
	Optional<Order> getOrderById(Integer orderId);
	List<Order> getAllOrders();
	Order updateOrderStatus(Integer orderId, OrderStatus status);
}
