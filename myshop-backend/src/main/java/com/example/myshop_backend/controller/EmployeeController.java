package com.example.myshop_backend.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.dto.EmployeeDto;
import com.example.myshop_backend.service.EmployeeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
//	private EmployeeService employeeService;
//	@PostMapping
//	public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
//		EmployeeDto savEmployee = employeeService.creatEmployee(employeeDto);
//		return new ResponseEntity<>(savEmployee, HttpStatus.CREATED);
//	}
}