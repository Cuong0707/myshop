package com.example.myshop_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.dto.CategoryDto;
import com.example.myshop_backend.service.CategoryService;

@RestController
@RequestMapping("api/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public ResponseEntity<List<CategoryDto>> getAll(){
		return categoryService.findAll();
	}
}
