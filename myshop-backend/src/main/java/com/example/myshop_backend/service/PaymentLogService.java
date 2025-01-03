package com.example.myshop_backend.service;

import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.PaymentLog;



public interface PaymentLogService {
	PaymentLogDto createPaymentLog(PaymentLogDto logDto);
}
