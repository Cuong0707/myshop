package com.example.myshop_backend.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.myshop_backend.dto.BrandDto;
import com.example.myshop_backend.entity.Brand;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.reponsitory.ProductRepository;

public class BrandMapper {
	private static ProductRepository productRepository;
	
	public static Brand dtoToBrand(BrandDto brandDto)
	{
		List<Product> products = new ArrayList<Product>();
		if (brandDto.getProductIds()!= null) {
			products = productRepository.findAllById(brandDto.getProductIds());
		}
				
		
		return new Brand(
				brandDto.getBrandId(),
				brandDto.getBrandName(),
				brandDto.getBrandImg(),
				products
				);
	}
	
	public static BrandDto brandToDto(Brand brand)
	{
		return new BrandDto(
				brand.getBrandId(),
				brand.getBrandName(),
				brand.getBrandImg(),
				brand.getProducts().stream().map(Product::getProductId).collect(Collectors.toList())
				);
	}
}
