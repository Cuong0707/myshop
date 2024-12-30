package com.example.myshop_backend.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myshop_backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{
	

}
