package com.example.myshop_backend.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myshop_backend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
