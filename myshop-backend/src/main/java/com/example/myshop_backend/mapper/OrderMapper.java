package com.example.myshop_backend.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.dto.OrderProductDto;
import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.exceptions.NotFoundException;
import com.example.myshop_backend.reponsitory.OrderRepository;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;
import com.example.myshop_backend.reponsitory.ProductRepository;
import com.example.myshop_backend.reponsitory.UserRepository;

public class OrderMapper {
	
	private static OrderRepository orderRepository;
	public static OrderDto orderToDto(Order order)
	{
		if (order==null) {
			return null;
		}
		//Chuyển PaymentLogs từ entity sang dto
		List<PaymentLogDto> paymentLogDtos = order.getPaymentLogs().stream().map(PaymentLogMapper::paymentLogToDto)
			    .collect(Collectors.toList());
		//Chuyển Product từ entity sang dto
		List<OrderProductDto> productDtos = order.getOrderProducts().stream().map(OrderProductMapper::toDto)
				.collect(Collectors.toList());
		
		return new OrderDto(
				order.getOrderId(),
				order.getUsers()!=null?order.getUsers().getUserId():null,
				order.getStatus(),
				order.getPaymentMethod(),
				order.getPaymentDate(),
				paymentLogDtos,
				productDtos
				);
	}
    public static Order orderDtoToOrder(OrderDto orderDto) {
        

        return orderRepository.findById(orderDto.getOrderID())
        		.orElseThrow(()-> new NotFoundException("Not found orderId: "+ orderDto.getOrderID()));
    }
}
