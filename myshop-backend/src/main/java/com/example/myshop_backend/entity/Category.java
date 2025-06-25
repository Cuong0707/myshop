package com.example.myshop_backend.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Table(name = "Category")
public class Category {
	@Id
 	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "category_id")
 	private Integer categoryId;
	
	@Column(name = "name", nullable = false, length = 255)
	private String name;

    @Column(name = "description", length = 500)
    private String description;

    @OneToMany(mappedBy = "category")
    @JsonManagedReference
    private List<Product> products;

}
