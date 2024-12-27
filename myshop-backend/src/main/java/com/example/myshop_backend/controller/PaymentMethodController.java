package com.example.myshop_backend.controller;

import com.example.myshop_backend.entity.PaymentMethod;
import com.example.myshop_backend.reponsitory.PaymentMethodRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment-methods")
public class PaymentMethodController {

    @Autowired
    private PaymentMethodRepository paymentMethodRepository;

    @GetMapping
    public List<PaymentMethod> getAllPaymentMethods() {
        return paymentMethodRepository.findAll();
    }

    @PostMapping
    public PaymentMethod createPaymentMethod(@RequestBody PaymentMethod paymentMethod) {
        return paymentMethodRepository.save(paymentMethod);
    }

    @PutMapping("/{id}")
    public PaymentMethod updatePaymentMethod(@PathVariable Integer id, @RequestBody PaymentMethod updatedMethod) {
        PaymentMethod paymentMethod = paymentMethodRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment Method not found"));
        paymentMethod.setName(updatedMethod.getName());
        paymentMethod.setDescription(updatedMethod.getDescription());
        paymentMethod.setIsActive(updatedMethod.getIsActive());
        paymentMethod.setTransactionFee(updatedMethod.getTransactionFee());
        paymentMethod.setGatewayUrl(updatedMethod.getGatewayUrl());
        paymentMethod.setApiKey(updatedMethod.getApiKey());
        paymentMethod.setCurrency(updatedMethod.getCurrency());
        return paymentMethodRepository.save(paymentMethod);
    }

    @DeleteMapping("/{id}")
    public String deletePaymentMethod(@PathVariable Integer id) {
        paymentMethodRepository.deleteById(id);
        return "Payment method deleted successfully";
    }
}
