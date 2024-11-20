package com.example.myshop_backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
//	@PostMapping
//	public ResponseEntity<UserDto> creatEntity(@RequestBody UserDto userDto) {
//		
//		UserDto saveUserDto = userService.createUserDto(userDto);
//		System.out.println("aaaaaa "+ saveUserDto);
//		return new ResponseEntity<>(saveUserDto,HttpStatus.CREATED);
//	}
	@PostMapping("/signup")
	public ResponseEntity<String> registerUser(@RequestBody UserDto userDto) {
        String response = userService.registerUser(userDto);
        if (response.equals("Đăng ký thành công!")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }
	
}
