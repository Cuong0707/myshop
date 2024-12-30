package com.example.myshop_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.dto.CollectionDto;
import com.example.myshop_backend.entity.Collection;
import com.example.myshop_backend.mapper.CollectionMapper;
import com.example.myshop_backend.service.CollectionService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("api/collections")
public class CollectionController {
	
	@Autowired
	private CollectionService collectionService;
	
	@PostMapping("/")
	public ResponseEntity<Collection> createCollection(@RequestBody CollectionDto collectionDto)
	{
		Collection collection = collectionService.createCollection(collectionDto);
		return new ResponseEntity<>(collection,HttpStatus.CREATED);
	}
	
	@PostMapping("/products")
	public ResponseEntity<CollectionDto> addProductsToCollection(@RequestParam Integer collectionId,@RequestParam List<Integer> productIds)
	{
		CollectionDto collectionDto = collectionService.addProductsToCollection(collectionId, productIds);
		return new ResponseEntity<>(collectionDto,HttpStatus.OK);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<CollectionDto>> getAllCollection()
	{
		List<CollectionDto> collectionDtos = collectionService.getAllCollectionDto();
		return new ResponseEntity<>(collectionDtos,HttpStatus.OK);
	}
}
