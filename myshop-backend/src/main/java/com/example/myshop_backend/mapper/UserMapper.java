package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.UserDto;
import com.example.myshop_backend.entity.Users;

public class UserMapper {
	public static Users mapToUsers(UserDto userDto) {
		return new Users(
				userDto.getId(),
				userDto.getName(),
				userDto.getEmail(),
				userDto.getAddress(),
				userDto.getPaymentInfo(),
				userDto.getUserName(), 
				userDto.getPassWord(), null
		);	
	}
	public static UserDto mapToUserDto(Users users) {
		return new UserDto(
				users.getUserId(),
				users.getName(),
				users.getEmail(),
				users.getAddress(),
				users.getPaymentInfo(),
				users.getUserName(),
				users.getPassWord()
		);	
	}
}
