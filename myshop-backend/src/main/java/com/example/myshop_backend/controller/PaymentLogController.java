package com.example.myshop_backend.controller;

import com.example.myshop_backend.entity.PaymentLog;
import com.example.myshop_backend.reponsitory.PaymentLogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment-logs")
public class PaymentLogController {

    @Autowired
    private PaymentLogRepository paymentLogRepository;

    @GetMapping
    public List<PaymentLog> getAllPaymentLogs() {
        return paymentLogRepository.findAll();
    }

    @PostMapping
    public PaymentLog createPaymentLog(@RequestBody PaymentLog paymentLog) {
        return paymentLogRepository.save(paymentLog);
    }
}
