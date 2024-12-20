package com.example.myshop_backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.service.ProductService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@AllArgsConstructor
@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	private final ProductService productService;
	
	@GetMapping
	public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> products = productService.getAllProducts();
        return ResponseEntity.ok(products); // Trả về danh sách ProductDto
    }
	
	@PostMapping("/create")
	public ResponseEntity<Product> createProduct(@RequestBody ProductDto productDto){
		Product product = productService.createProductDto(productDto);
		return ResponseEntity.ok(product);
	}
	@GetMapping("/page")
	public ResponseEntity<List<ProductDto>> getPageProducts(
			@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size){
		Page<ProductDto> products = productService.getPageProducts(PageRequest.of(page, size));
        return ResponseEntity.ok(products.getContent());
	}
}
