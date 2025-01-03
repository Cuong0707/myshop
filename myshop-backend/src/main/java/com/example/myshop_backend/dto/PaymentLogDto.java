package com.example.myshop_backend.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentLogDto {
	private Integer logId;
	private Integer orderId;
	private Integer paymentMethodId;
	private BigDecimal amount;
	private String currency;
	private LocalDateTime transactionDate;
	private String status;
}
