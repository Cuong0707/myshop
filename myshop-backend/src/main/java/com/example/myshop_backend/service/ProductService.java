package com.example.myshop_backend.service;

import java.util.List;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Product;

public interface ProductService {
	Product createProductDto(ProductDto productDto);

	ProductDto addProduct(ProductDto productDto);

	List<ProductDto> getAllProducts();
}
