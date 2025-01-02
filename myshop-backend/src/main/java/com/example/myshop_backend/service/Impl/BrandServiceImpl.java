package com.example.myshop_backend.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.BrandDto;
import com.example.myshop_backend.entity.Brand;
import com.example.myshop_backend.mapper.BrandMapper;
import com.example.myshop_backend.reponsitory.BrandRepository;
import com.example.myshop_backend.service.BrandService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BrandServiceImpl implements BrandService {
	@Autowired
	private BrandRepository brandRepository;
	
	@Override
	public List<BrandDto> getAllBrand()
	{
		List<Brand> brand = brandRepository.findAll();
		return brand.stream().map(BrandMapper::brandToDto).collect(Collectors.toList());
	}
	@Override
	public BrandDto createBrand(BrandDto brandDto)
	{
		System.out.println(brandDto.getBrandName());
		return BrandMapper.brandToDto(brandRepository.save(BrandMapper.dtoToBrand(brandDto)));
	}
}
