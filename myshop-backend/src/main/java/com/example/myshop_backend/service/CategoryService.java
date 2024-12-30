package com.example.myshop_backend.service;

import java.util.List;

import com.example.myshop_backend.dto.CategoryDto;
import com.example.myshop_backend.entity.Category;

public interface CategoryService {
	List<CategoryDto> findAll();
}

