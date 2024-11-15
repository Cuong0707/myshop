package com.example.myshop_backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.dto.EmployeeDto;
import com.example.myshop_backend.dto.UserDto;
import com.example.myshop_backend.entity.Users;
import com.example.myshop_backend.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
	private UserService userService;
	
	@PostMapping
	public ResponseEntity<UserDto> creatEntity(@RequestBody UserDto userDto) {
		
		UserDto saveUserDto = userService.createUserDto(userDto);
		
		return new ResponseEntity<>(saveUserDto,HttpStatus.CREATED);
	}
	
}
