package com.example.myshop_backend.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderProductDto {
	private Integer productId;
	private String productName;
	private int quantity;
	private BigDecimal price;
}
