package com.example.myshop_backend.service.Impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.entity.PaymentMethod;
import com.example.myshop_backend.enums.OrderStatus;
import com.example.myshop_backend.mapper.PaymentLogMapper;
import com.example.myshop_backend.reponsitory.OrderRepository;
import com.example.myshop_backend.reponsitory.PaymentMethodRepository;
import com.example.myshop_backend.service.PaymentLogService;
import com.example.myshop_backend.service.PaymentService;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService{
	private OrderRepository orderRepository;
	
	private PaymentMethodRepository paymentMethodRepository;
	
	private PaymentLogService paymentLogService;
	
	@Override
	@Transactional
	public String processPayment(Integer orderId,Integer paymentMethodId, BigDecimal amount ) {
		
		Order order = orderRepository.findById(orderId).orElseThrow(()->new IllegalArgumentException("Invalid Order ID"));
		
		PaymentMethod paymentMethod = paymentMethodRepository.findById(paymentMethodId)
	            .orElseThrow(() -> new IllegalArgumentException("Invalid Payment Method ID"));
	
	    // Kiểm tra trạng thái
	    if (!paymentMethod.getIsActive()) {
	        throw new IllegalArgumentException("Payment method is not active");
	    }
	
	    // Tính phí giao dịch
	    BigDecimal  transactionFee = paymentMethod.getTransactionFee() != null ? paymentMethod.getTransactionFee() : BigDecimal.ZERO;
	    BigDecimal  totalAmount = amount.add(transactionFee);
	
	    // Gửi yêu cầu thanh toán ( đây là ví dụ)
	    String result = "Payment of " + totalAmount + " " + paymentMethod.getCurrency() + " processed via " + paymentMethod.getName();
	    /*
	     * Thêm code xử lý thanh toán với phương thức đã chọn
	     * Lấy kết quả trả về gán cho status ở paymentLog ở phía dưới
	     * 
	     */
	    
	    // Lưu lịch sử giao dịch
	    PaymentLog log = new PaymentLog();
//	    log.setOrderId(orderId);
	    log.setPaymentMethod(paymentMethod);
	    log.setAmount(totalAmount);
	    log.setCurrency(paymentMethod.getCurrency());
//	    log.setStatus("PENDING"); 
	    log.setTransactionDate(LocalDateTime.now());
	    paymentLogService.createPaymentLog(PaymentLogMapper.paymentLogToDto(log));
	    
	    if ("SUCCESS".equals(log.getStatus())) {
            // Cập nhật trạng thái của đơn hàng thành COMPLETED
            order.setStatus(OrderStatus.COMPLETED);
            order.setPaymentDate(LocalDateTime.now()); // Nếu cần ghi lại thời gian thanh toán
            orderRepository.save(order);
        }
	    
	    return result;
	}

}
