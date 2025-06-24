package com.example.myshop_backend.mapper;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.myshop_backend.dto.UserRegisterDTO;
import com.example.myshop_backend.dto.UserResponseDTO;
import com.example.myshop_backend.entity.Users;

@Component
public class UserMapper {
	
	@Autowired
    private PasswordEncoder passwordEncoder;

    public Users toEntity(UserRegisterDTO dto) {
        Users user = new Users();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setAddress(dto.getAddress());
        user.setPaymentInfo(dto.getPaymentInfo());
        user.setUserName(dto.getUserName());
        user.setPassWord(passwordEncoder.encode(dto.getPassWord()));
        return user;
    }

    public UserResponseDTO toDTO(Users user) {
        return new UserResponseDTO(user.getUserId(), user.getName(), user.getEmail());
    }
}
