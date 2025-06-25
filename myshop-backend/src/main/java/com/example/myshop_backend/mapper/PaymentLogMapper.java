package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.exceptions.NotFoundException;
import com.example.myshop_backend.reponsitory.OrderRepository;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;

public class PaymentLogMapper {
	private static OrderRepository orderRepository;
	private static PaymentLogRepository paymentLogRepository;
	public static PaymentLogDto paymentLogToDto(PaymentLog paymentLog)
	{	
		if (paymentLog==null) {
			return null;
		}
		
		return new PaymentLogDto(
				paymentLog.getLogId(),
				paymentLog.getOrder().getOrderId(),
				paymentLog.getPaymentMethod().getPaymentMethodId(),
				paymentLog.getAmount(),
				paymentLog.getCurrency(),
				paymentLog.getTransactionDate(),
				paymentLog.getStatus()
				);
	}
	public static PaymentLog dtoToPaymentLog(PaymentLogDto paymentLogDto)
	{
		
		return paymentLogRepository.findById(paymentLogDto.getLogId())
				.orElseThrow(()-> new NotFoundException("Not Found PaymentLogId:"+ paymentLogDto.getLogId()));
	}
}
