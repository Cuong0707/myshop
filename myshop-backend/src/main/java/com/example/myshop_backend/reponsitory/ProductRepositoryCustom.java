package com.example.myshop_backend.reponsitory;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Product;

public interface ProductRepositoryCustom {
    Page<ProductDto> findAllProductDtosWithFilter(String collection, String brand, Pageable pageable);
}

