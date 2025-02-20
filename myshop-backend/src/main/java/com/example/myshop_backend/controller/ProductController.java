package com.example.myshop_backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.exceptions.ApiResponse;
import com.example.myshop_backend.mapper.ProductMapper;
import com.example.myshop_backend.service.ProductService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
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
	public ApiResponse<List<ProductDto>> getAllProducts() {
        List<ProductDto> products = productService.getAllProducts();
        return ApiResponse.success(HttpStatus.OK, "Ok", products); // Trả về danh sách ProductDto
    }
	@PostMapping("/create")
	public ApiResponse<List<ProductDto>> createProduct(@RequestBody List<Product> products){
		List<ProductDto> productDtos = productService.createProductDto(products);
		return ApiResponse.success(HttpStatus.CREATED, "Product Created", productDtos);
	}
	@GetMapping("/page")
	public ApiResponse<List<ProductDto>> getPageProducts(
			@RequestParam(defaultValue = "0") int page,
	        @RequestParam(defaultValue = "6") int size,
	        @RequestParam(defaultValue = "productId") String sortBy,
	        @RequestParam(defaultValue = "asc") String sortDir,
	        @RequestParam(required = false) String collection,
	        @RequestParam(required = false) String brand){
		Sort sort = sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
		PageRequest pageRequest = PageRequest.of(page, size, sort);
		Page<ProductDto> products = productService.getFilteredPageProducts(collection, brand, pageRequest);
        return ApiResponse.success(HttpStatus.OK, "Ok", products.getContent());
	}
}
