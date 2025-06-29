package com.example.myshop_backend.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.exceptions.BadCredentialsException;
import com.example.myshop_backend.mapper.ProductMapper;
import com.example.myshop_backend.reponsitory.ProductRepository;
import com.example.myshop_backend.service.ProductService;

import jakarta.persistence.criteria.Join;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService{
	
	private ProductRepository productRepository;
	
	@Override
	public ProductDto addProduct(ProductDto productDto) {
		return null;
	}
	
	@Override
	public List<ProductDto> createProductDto(List<Product> products) {
//        if(productDto.getProductId()!=null)
//        {
//        	productDto.setProductId(null);
//        }
//        else if(productRepository.existsById(productDto.getProductId())){
//        	throw new BadCredentialsException("Id Exist");
//        }
		
        List<ProductDto> savedProduct = productRepository.saveAll(products).stream().map(ProductMapper::productToProductDto).collect(Collectors.toList());
        return savedProduct;
    }
	
	@Override
	public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        List<ProductDto> productDtos = new ArrayList<>();
        for (Product product : products) {
            ProductDto productDto = ProductMapper.productToProductDto(product);
            productDtos.add(productDto);
        }
        return productDtos;
	}
	
	@Override
	public Page<ProductDto> getFilteredPageProducts(String collection, String brand, Pageable pageable) {
		return productRepository.findAllProductDtosWithFilter(collection, brand, pageable);
	}

	
}
