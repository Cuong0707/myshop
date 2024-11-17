package com.example.myshop_backend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
	private Integer productId;
    private String name;
    private String description;
    private Double price;
    private String imageUrl;
    private int categoryId;
    
}
