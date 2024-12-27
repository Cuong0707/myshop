package com.example.myshop_backend.service.Impl;

import org.springframework.stereotype.Service;

import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;
import com.example.myshop_backend.service.PaymentLogService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PaymentLogServiceImpl implements PaymentLogService{
	private PaymentLogRepository paymentLogRepository;
	
	@Override
	public PaymentLog createPaymentLog(PaymentLog log) {
        return paymentLogRepository.save(log);
    }
}
