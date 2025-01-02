package com.example.myshop_backend.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.myshop_backend.entity.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer>{

}
