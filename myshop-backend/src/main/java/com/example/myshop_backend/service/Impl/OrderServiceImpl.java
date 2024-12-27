package com.example.myshop_backend.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.enums.OrderStatus;
import com.example.myshop_backend.mapper.OrderMapper;
import com.example.myshop_backend.reponsitory.OrderRepository;
import com.example.myshop_backend.service.OrderService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService{
	
	private OrderRepository orderRepository;
	
	@Override
	public Order creaOrder(OrderDto orderDto) {
		Order order = OrderMapper
		orderDto.setOrderStatus(OrderStatus.PENDING); // Mặc định là PENDING khi tạo đơn
        return orderRepository.save(order);
	}

	@Override
	public Optional<Order> getOrderById(Integer orderId) {
		return orderRepository.findById(orderId);
	}

	@Override
	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

	@Override
	public Order updateOrderStatus(Integer orderId, OrderStatus status) {
		Optional<Order> order = orderRepository.findById(orderId);
        if (order.isPresent()) {
            Order existingOrder = order.get();
            existingOrder.setStatus(status);
            return orderRepository.save(existingOrder);
        }
        return null;
	}
	
}
