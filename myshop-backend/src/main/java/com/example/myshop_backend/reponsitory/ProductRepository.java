package com.example.myshop_backend.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myshop_backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}
