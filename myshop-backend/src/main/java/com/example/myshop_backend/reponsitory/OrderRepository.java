package com.example.myshop_backend.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.myshop_backend.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{

}
