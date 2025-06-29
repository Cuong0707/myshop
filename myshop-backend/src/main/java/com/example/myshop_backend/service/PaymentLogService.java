package com.example.myshop_backend.service;

import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.entity.PaymentMethod;



public interface PaymentLogService {
	PaymentLogDto createPaymentLog(PaymentLogDto logDto, Order order, PaymentMethod paymentMethod);
}
