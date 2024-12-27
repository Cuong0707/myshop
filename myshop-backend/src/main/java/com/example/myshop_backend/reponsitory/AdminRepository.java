package com.example.myshop_backend.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myshop_backend.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
