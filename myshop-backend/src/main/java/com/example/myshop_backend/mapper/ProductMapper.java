package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Category;
import com.example.myshop_backend.entity.Product;

public class ProductMapper {
	public static Product productDtoToProduct(ProductDto productDto) {
		Product product = new Product();
        product.setProductId(productDto.getProductId());
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setPrice(productDto.getPrice());
        product.setImageUrl(productDto.getImageUrl());

        // Nếu categoryId hợp lệ, gán category vào product
        if (productDto.getCategoryId() > 0) {
            Category category = new Category();
            category.setCategoryId(productDto.getCategoryId());
            product.setCategory(category);
        }

        return product;
				
	}
	public static ProductDto productToProductDto(Product product) {
		return new ProductDto(
				product.getProductId(),
				product.getName(),
				product.getDescription(),
				product.getPrice(),
				product.getImageUrl(),
				product.getCategory()!=null?product.getCategory().getCategoryId():0
				);
	}
}
