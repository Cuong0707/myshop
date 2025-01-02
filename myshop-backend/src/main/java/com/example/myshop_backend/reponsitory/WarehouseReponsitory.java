package com.example.myshop_backend.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myshop_backend.entity.Warehouse;

public interface WarehouseReponsitory extends JpaRepository<Warehouse, Integer>{

}
