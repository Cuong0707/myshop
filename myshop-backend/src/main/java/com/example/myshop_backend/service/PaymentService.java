package com.example.myshop_backend.service;

import java.math.BigDecimal;

public interface PaymentService {
	String processPayment(Integer paymentMethodId, BigDecimal amount, Integer orderId);
}
