package com.example.myshop_backend.service;

import java.util.List;

import com.example.myshop_backend.dto.BrandDto;

public interface BrandService {

	List<BrandDto> getAllBrand();

	BrandDto createBrand(BrandDto brandDto);
	
}
