package com.example.myshop_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.dto.BrandDto;
import com.example.myshop_backend.service.BrandService;

@RestController
@RequestMapping("/api/brand")
public class BrandController {
	
	@Autowired
	private BrandService brandService;
	
	@GetMapping
	public ResponseEntity<List<BrandDto>> getAllBrand()
	{
		List<BrandDto> brandDtos = brandService.getAllBrand();
		return new ResponseEntity<>(brandDtos,HttpStatus.OK);
	}
	
	@PostMapping("/create")
	public ResponseEntity<BrandDto> createBrand(@RequestBody BrandDto brandDto)
	{
		return new ResponseEntity<>(brandService.createBrand(brandDto),HttpStatus.CREATED);
	}
}
