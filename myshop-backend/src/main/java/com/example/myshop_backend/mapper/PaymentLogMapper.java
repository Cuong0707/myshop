package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.entity.PaymentMethod;
import com.example.myshop_backend.exceptions.NotFoundException;
import com.example.myshop_backend.reponsitory.OrderRepository;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;

public class PaymentLogMapper {
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
	public static PaymentLog dtoToPaymentLog(PaymentLogDto paymentLogDto,Order order, PaymentMethod method)
	{
		if (paymentLogDto == null) return null; 
		PaymentLog log = new PaymentLog();
		log.setLogId(paymentLogDto.getLogId()); // Có thể null nếu là log mới
		log.setAmount(paymentLogDto.getAmount());
		log.setCurrency(paymentLogDto.getCurrency());
		log.setTransactionDate(paymentLogDto.getTransactionDate());
		log.setStatus(paymentLogDto.getStatus());

		log.setOrder(order); // Gắn ngược lại order
		log.setPaymentMethod(method); // Gắn phương thức thanh toán
		return log;
	}
}
