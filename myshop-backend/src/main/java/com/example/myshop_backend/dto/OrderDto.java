package com.example.myshop_backend.dto;

import java.time.LocalDateTime;

import com.example.myshop_backend.entity.PaymentMethod;
import com.example.myshop_backend.enums.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {
	private Integer orderID;
	private Integer userId;
	private OrderStatus orderStatus;
	private PaymentMethod paymentMethod;
	private LocalDateTime orderDate;
	
}
