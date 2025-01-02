package com.example.myshop_backend.service.Impl;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.CategoryDto;
import com.example.myshop_backend.entity.Category;
import com.example.myshop_backend.mapper.CategoryMapper;
import com.example.myshop_backend.reponsitory.CategoryRepository;
import com.example.myshop_backend.service.CategoryService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Override
	public List<CategoryDto> findAll() {
		List<Category> categories =  categoryRepository.findAll();
		return categories.stream().map(CategoryMapper::categoryToDto).collect(Collectors.toList());
	}
	@Override
	public CategoryDto createCategory(CategoryDto categoryDto)
	{
		Category category = categoryRepository.save(CategoryMapper.dtoToCategory(categoryDto));
		return CategoryMapper.categoryToDto(category);
	}
}
