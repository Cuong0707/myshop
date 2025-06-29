package com.example.myshop_backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.Config.JwtUtil;
import com.example.myshop_backend.dto.UserLoginDTO;
import com.example.myshop_backend.dto.UserRegisterDTO;
import com.example.myshop_backend.dto.UserResponseDTO;
import com.example.myshop_backend.exceptions.ApiResponse;
import com.example.myshop_backend.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@AllArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	private UserService userService;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtil jwtUtil;
	@PostMapping("/register")
	public ResponseEntity<ApiResponse<UserResponseDTO>> registerUser(@Validated @RequestBody UserRegisterDTO userDto) {
        ApiResponse<UserResponseDTO> response = userService.registerUser(userDto);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
	@PostMapping("/login")
    public ApiResponse<String> login(@RequestBody UserLoginDTO userLoginDTO) {
		try {
	        Authentication authentication = authenticationManager.authenticate(
	            new UsernamePasswordAuthenticationToken(userLoginDTO.getUserName(), userLoginDTO.getEmail())
	        );

	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        String token = jwtUtil.generateToken((UserDetails) authentication.getPrincipal());

	        return ApiResponse.success(HttpStatus.OK, "Đăng nhập thành công", token);

	    } catch (BadCredentialsException ex) {
	        return ApiResponse.error(HttpStatus.UNAUTHORIZED, "Tên đăng nhập hoặc mật khẩu không chính xác");
	    } catch (Exception ex) {
	        return ApiResponse.error(HttpStatus.INTERNAL_SERVER_ERROR, "Lỗi máy chủ: " + ex.getMessage());
	    }
    }
	
}
