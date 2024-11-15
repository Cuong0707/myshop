package com.example.myshop_backend.service.Impl;

import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.EmployeeDto;
import com.example.myshop_backend.entity.Employee;
import com.example.myshop_backend.mapper.EmployeeMapper;
import com.example.myshop_backend.reponsitory.EmployeeRepository;
import com.example.myshop_backend.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

	private EmployeeRepository employeeRepository; 
	
	@Override
	public EmployeeDto creatEmployee(EmployeeDto employeeDto) {
		
		Employee employee = EmployeeMapper.mapToEmloyee(employeeDto);
		Employee savEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmloyeeDto(savEmployee);
	}
	
}
