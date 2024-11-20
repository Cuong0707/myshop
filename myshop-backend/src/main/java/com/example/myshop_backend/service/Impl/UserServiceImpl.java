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
	
	@Override
	public String registerUser(UserDto userDto) {
        // Kiểm tra confirm password
        if (!userDto.getPassWord().equals(userDto.getConfirmPassword())) {
            return "Password và Confirm Password không khớp!";
        }

        // Kiểm tra username đã tồn tại
        if (userRepository.existsByUserName(userDto.getUserName())) {
            return "Username đã tồn tại!";
        }

        // Tạo mới người dùng
        Users newUser = new Users();
        newUser.setUserName(userDto.getUserName());
        newUser.setPassWord(userDto.getPassWord());
        newUser.setName(userDto.getName());
        newUser.setEmail(userDto.getEmail());
        newUser.setAddress(userDto.getAddress());
        newUser.setPaymentInfo(userDto.getPaymentInfo());

        userRepository.save(newUser);
        return "Đăng ký thành công!";
    }
}
