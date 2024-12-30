package com.example.myshop_backend.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.example.myshop_backend.dto.CategoryDto;
import com.example.myshop_backend.entity.Category;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.reponsitory.ProductRepository;

public class CategoryMapper {
	
	private static ProductRepository productRepository;
	public static Category dtoToCategory(CategoryDto categoryDto) {
			
		List<Product> products = new ArrayList<Product>();
		if(categoryDto.getProductIds()!=null)
		{
			products = productRepository.findAllById(categoryDto.getProductIds());
		}
		
		
		return new Category(
				categoryDto.getCategoryId(),
				categoryDto.getCategoryName(),
				categoryDto.getDescription(),
				products
				);
	}
	
	public static CategoryDto categoryToDto(Category category)
	{
		return new CategoryDto(
				category.getCategoryId(),
				category.getDescription(),
				category.getName(),
				category.getProducts().stream().map(Product::getProductId).collect(Collectors.toList())
				);
	}
}
