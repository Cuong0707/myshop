package com.example.myshop_backend.service.Impl;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.CollectionDto;
import com.example.myshop_backend.entity.Collection;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.mapper.CollectionMapper;
import com.example.myshop_backend.reponsitory.CollectionRepository;
import com.example.myshop_backend.reponsitory.ProductRepository;
import com.example.myshop_backend.service.CollectionService;
import com.example.myshop_backend.exceptions.NotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CollectionServiceImpl implements CollectionService{
	
	@Autowired
	private CollectionRepository collectionRepository;
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public CollectionDto addProductsToCollection(Integer collectionId, List<Integer> productIds) {
		Collection collection = collectionRepository.findById(collectionId).
				orElseThrow(() -> new NotFoundException("Collection not found :"+ collectionId));
		List<Product> products = productRepository.findAllById(productIds);
		List<Integer> notFoundIds = productIds.stream()
		        .filter(id -> products.stream().noneMatch(product -> product.getProductId().equals(id))) //Duyệt qua xem sp có tồn tại chưa
		        .collect(Collectors.toList());

		    if (!notFoundIds.isEmpty()) {
		        throw new RuntimeException("Products not found for IDs: " + notFoundIds);
		    }
		collection.getProducts().addAll(products);
		CollectionDto collectionDto = CollectionMapper.collectionToDto(collectionRepository.save(collection));
		return collectionDto; 
	}
	
	@Override
	public Collection createCollection(CollectionDto collectionDto)
	{
		Collection collection = collectionRepository.save(CollectionMapper.dtoToCollection(collectionDto));
		return collection;
	}

	@Override
	public List<CollectionDto> getAllCollectionDto() {
		List<Collection> collections = collectionRepository.findAll();
		return collections.stream().map(CollectionMapper::collectionToDto).collect(Collectors.toList());
	}
}
