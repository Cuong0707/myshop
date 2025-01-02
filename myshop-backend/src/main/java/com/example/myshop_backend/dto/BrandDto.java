package com.example.myshop_backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BrandDto {
	private Integer brandId;
	private String brandName;
	private String brandImg;
	private List<Integer> productIds;
}
