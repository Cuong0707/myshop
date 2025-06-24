package com.example.myshop_backend.service;

import com.example.myshop_backend.dto.UserLoginDTO;
import com.example.myshop_backend.dto.UserRegisterDTO;
import com.example.myshop_backend.dto.UserResponseDTO;
import com.example.myshop_backend.exceptions.ApiResponse;

public interface UserService {
	ApiResponse<UserResponseDTO> registerUser(UserRegisterDTO dto);

	ApiResponse<UserResponseDTO> login(UserLoginDTO dto);
}
