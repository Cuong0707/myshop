package com.example.myshop_backend.entity;

import java.util.List;

import org.hibernate.annotations.DialectOverride.GeneratedColumn;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "brand")
public class Brand {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "brand_id")
	private Integer brandId;
	
	@Column(name = "brand_name", nullable = false, length = 50)
	private String brandName;
	
	@Column(name = "brand_img", nullable = true,columnDefinition = "VARCHAR(255)")
	private String brandImg;
	
	@OneToMany(mappedBy = "brand")
	private List<Product> products;
}
