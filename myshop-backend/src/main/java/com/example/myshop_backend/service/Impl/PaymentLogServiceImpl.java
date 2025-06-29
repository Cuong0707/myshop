package com.example.myshop_backend.service.Impl;

import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.entity.PaymentMethod;
import com.example.myshop_backend.mapper.PaymentLogMapper;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;
import com.example.myshop_backend.service.PaymentLogService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PaymentLogServiceImpl implements PaymentLogService{
	private PaymentLogRepository paymentLogRepository;
	
	@Override
	public PaymentLogDto createPaymentLog(PaymentLogDto logDto, Order order, PaymentMethod paymentMethod) {
        return PaymentLogMapper.paymentLogToDto(paymentLogRepository.save(PaymentLogMapper.dtoToPaymentLog(logDto, order, paymentMethod)));
    }
}
