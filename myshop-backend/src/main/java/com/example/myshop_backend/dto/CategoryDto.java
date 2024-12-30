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
public class CategoryDto {
	private Integer categoryId;
	private String categoryName;
	private String description;
	private List<Integer> productIds;
}
