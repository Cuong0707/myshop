package com.example.myshop_backend.mapper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.myshop_backend.dto.CollectionDto;
import com.example.myshop_backend.entity.Collection;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.reponsitory.ProductRepository;

public class CollectionMapper {

	private static ProductRepository productRepository;
	
	public static Collection dtoToCollection(CollectionDto collectionDto)
	{
		try {
			List<Product> products = productRepository.findAllById(collectionDto.getProductIds());
			return new Collection(
					collectionDto.getCollectionId(),
					collectionDto.getCollectionName(),
					products
					);
		} catch (Exception e) {
			return new Collection(
					collectionDto.getCollectionId(),
					collectionDto.getCollectionName(),null
					);
		}
		
		
		
	}
	public static CollectionDto collectionToDto(Collection collection)
	{
		return new CollectionDto(
				collection.getCollectionId(),
				collection.getCollectionName(),
				collection.getProducts().stream().map(Product::getProductId).toList()
				);
	}
}
