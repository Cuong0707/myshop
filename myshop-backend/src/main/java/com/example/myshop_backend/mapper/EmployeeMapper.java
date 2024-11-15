package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.EmployeeDto;
import com.example.myshop_backend.entity.Employee;

public class EmployeeMapper {
	public static EmployeeDto mapToEmloyeeDto(Employee emloyee)
	{
		return new EmployeeDto(
				emloyee.getId(),
				emloyee.getFirstName(),
				emloyee.getLastName(),
				emloyee.getEmail()
		);
				
	}
	public static Employee mapToEmloyee(EmployeeDto emloyeeDto) {
		return new Employee(
				emloyeeDto.getId(),
				emloyeeDto.getFirstName(),
				emloyeeDto.getLastName(),
				emloyeeDto.getEmail()
		);
	}
}
