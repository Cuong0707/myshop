package com.example.myshop_backend.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Product;

public interface ProductService {
	List<ProductDto> createProductDto(List<Product> products);

	ProductDto addProduct(ProductDto productDto);

	List<ProductDto> getAllProducts();

	Page<ProductDto> getFilteredPageProducts(String collection, String brand, Pageable pageable);
	
	
}
