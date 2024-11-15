package com.example.myshop_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int product_id;
	
	@Column(name = "name")
    private String name ;
	
	@Column(name = "description")
    private String description ;
	
	@Column(name = "price")
    private Double price ;
	
	@Column(name = "image_url")
    private String imageUrl;
	
	@Column(name = "category_id")
    private int categoryId;
}
