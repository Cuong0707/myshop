package com.example.myshop_backend.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myshop_backend.entity.OrderProduct;
import com.example.myshop_backend.entity.OrderProductKey;

public interface OrderProductsRepository extends JpaRepository<OrderProduct, OrderProductKey>{

}
