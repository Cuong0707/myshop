package com.example.myshop_backend.controller;

import com.example.myshop_backend.dto.PaymentLogDto;
import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.exceptions.ApiResponse;
import com.example.myshop_backend.mapper.PaymentLogMapper;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/payment-logs")
public class PaymentLogController {

    @Autowired
    private PaymentLogRepository paymentLogRepository;

    @GetMapping
    public ApiResponse<List<PaymentLogDto>> getAllPaymentLogs() {
    	List<PaymentLogDto> paymentLogDtos = paymentLogRepository.findAll().stream().map(PaymentLogMapper::paymentLogToDto).collect(Collectors.toList());
        return ApiResponse.success(HttpStatus.OK,"Success", paymentLogDtos);
    }

    @PostMapping
    public ApiResponse<PaymentLogDto> createPaymentLog(@RequestBody PaymentLogDto paymentLogDto) {
    	PaymentLogDto paymentLogDto2 = PaymentLogMapper.paymentLogToDto(paymentLogRepository.save(PaymentLogMapper.dtoToPaymentLog(paymentLogDto)));
        return ApiResponse.success(HttpStatus.CREATED, "Payment Created", paymentLogDto2);
    }
}
