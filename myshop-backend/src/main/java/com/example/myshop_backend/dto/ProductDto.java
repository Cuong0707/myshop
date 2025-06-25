package com.example.myshop_backend.dto;


import java.math.BigDecimal;
import java.util.List;

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
    private BigDecimal price;
    private String imageUrl;
    private Integer categoryId;
    private List<Integer> collectionId;
    
}
