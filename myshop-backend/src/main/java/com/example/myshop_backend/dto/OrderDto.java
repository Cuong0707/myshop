package com.example.myshop_backend.dto;

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
	/*
	 * Thay đổi list product thành Orderproduct chứa số lượng sản phẩm và id sản phẩm
	 */
}
