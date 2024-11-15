package com.example.myshop_backend.service.Impl;

import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.UserDto;
import com.example.myshop_backend.entity.Users;
import com.example.myshop_backend.mapper.UserMapper;
import com.example.myshop_backend.reponsitory.UserRepository;
import com.example.myshop_backend.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
	
	private UserRepository userRepository;
	
	@Override
	public UserDto createUserDto(UserDto userDto) {
		Users users = UserMapper.mapToUsers(userDto);
		Users savedUsers = userRepository.save(users);
		return UserMapper.mapToUserDto(savedUsers);
	}
}
