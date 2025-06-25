package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.exceptions.NotFoundException;
import com.example.myshop_backend.reponsitory.OrderRepository;
import com.example.myshop_backend.reponsitory.UserRepository;

public class OrderMapper {
	
	private static OrderRepository orderRepository;

    // Chuyển đổi từ OrderDto sang Order entity
	public static OrderDto orderToDto(Order order)
	{
		if (order==null) {
			return null;
		}
		
		return new OrderDto(
				order.getOrderId(),
				order.getUsers()!=null?order.getUsers().getUserId():null,
				order.getStatus(),
				order.getPaymentMethod(),
				order.getPaymentDate(),
				order.getPaymentLogs(),
				order.getOrderProducts()
				);
	}
    public static Order orderDtoToOrder(OrderDto orderDto) {
        

        return orderRepository.findById(orderDto.getOrderID())
        		.orElseThrow(()-> new NotFoundException("Not found orderId: "+ orderDto.getOrderID()));
    }
}
