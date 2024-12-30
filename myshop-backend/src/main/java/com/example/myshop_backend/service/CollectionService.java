package com.example.myshop_backend.service;

import java.util.List;

import com.example.myshop_backend.dto.CollectionDto;
import com.example.myshop_backend.entity.Collection;

public interface CollectionService {
	CollectionDto addProductsToCollection(Integer collectionId, List<Integer> productIds);

	Collection createCollection(CollectionDto collectionDto);
	
	List<CollectionDto> getAllCollectionDto();
	
}
