package com.example.myshop_backend.mapper;

import java.util.ArrayList;
import java.util.List;

import com.example.myshop_backend.dto.ProductDto;
import com.example.myshop_backend.entity.Category;
import com.example.myshop_backend.entity.Collection;
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
        List<Collection> collections = new ArrayList<>();
        if (productDto.getCollectionId() != null) {
            for (Integer collectionId : productDto.getCollectionId()) {
                Collection collection = new Collection();
                collection.setCollectionId(collectionId);
                collections.add(collection);
            }
        }
        product.setCollections(collections);
        return product;
				
	}
	public static ProductDto productToProductDto(Product product) {
		// Lấy danh sách collectionIds từ collections
        List<Integer> collectionIds = new ArrayList<>();
        if (product.getCollections() != null) {
            for (Collection collection : product.getCollections()) {
                collectionIds.add(collection.getCollectionId());
            }
        }
		return new ProductDto(
				product.getProductId(),
				product.getName(),
				product.getDescription(),
				product.getPrice(),
				product.getImageUrl(),
				product.getCategory()!=null?product.getCategory().getCategoryId():0,
				collectionIds
				);
	}
}
