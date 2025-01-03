package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.exceptions.NotFoundException;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;
import com.example.myshop_backend.reponsitory.PaymentMethodRepository;

public class PaymentLogMapper {
	
	private static PaymentMethodRepository paymentMethodRepository;
	
	public static PaymentLogDto paymentLogToDto(PaymentLog paymentLog)
	{
		if (paymentLog==null) {
			return null;
		}
		return new PaymentLogDto(
				paymentLog.getLogId(),
				paymentLog.getOrderId(),
				paymentLog.getPaymentMethod().getPaymentMethodId(),
				paymentLog.getAmount(),
				paymentLog.getCurrency(),
				paymentLog.getTransactionDate(),
				paymentLog.getStatus()
				);
	}
	public static PaymentLog dtoToPaymentLog(PaymentLogDto paymentLogDto)
	{
		
		return new PaymentLog(
				paymentLogDto.getLogId(),
				paymentLogDto.getOrderId(),
				paymentMethodRepository.findById(paymentLogDto.getLogId()).
					orElseThrow(()-> new NotFoundException("Invalid PaymentLog Id:"+paymentLogDto.getLogId())),
				paymentLogDto.getAmount(),
				paymentLogDto.getCurrency(),
				paymentLogDto.getTransactionDate(),
				paymentLogDto.getStatus()
				);
	}
}
