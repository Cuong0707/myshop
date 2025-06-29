package com.example.myshop_backend.reponsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.myshop_backend.entity.PaymentLog;

@Repository
public interface PaymentLogRepository extends JpaRepository<PaymentLog, Integer>{
}
