package com.example.myshop_backend.service.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.UserLoginDTO;
import com.example.myshop_backend.dto.UserRegisterDTO;
import com.example.myshop_backend.dto.UserResponseDTO;
import com.example.myshop_backend.entity.Users;
import com.example.myshop_backend.exceptions.ApiResponse;
import com.example.myshop_backend.mapper.UserMapper;
import com.example.myshop_backend.reponsitory.UserRepository;
import com.example.myshop_backend.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
	
	private UserRepository userRepository;
	@Autowired
    private UserMapper userMapper;
	@Autowired
    private PasswordEncoder passwordEncoder;
	@Override
	public ApiResponse<UserResponseDTO> registerUser(UserRegisterDTO dto) {
        // Kiểm tra confirm password
        if (!dto.getPassWord().equals(dto.getConfirmPassword())) {
            return ApiResponse.error(HttpStatus.BAD_REQUEST, "Password và Confirm Password không khớp!");
        }

        // Kiểm tra username đã tồn tại
        if (userRepository.existsByUserName(dto.getUserName())) {
        	return ApiResponse.error(HttpStatus.BAD_REQUEST, "Username đã tồn tại!");
        }

        // Tạo mới người dùng
        Users newUser = userMapper.toEntity(dto);
        userRepository.save(newUser);
        
        UserResponseDTO userDto = userMapper.toDTO(newUser);
        return ApiResponse.success(HttpStatus.OK, "Đăng ký thành công!", userDto);
    }
	@Override
	public ApiResponse<UserResponseDTO>login(UserLoginDTO dto) {

        if (!userRepository.existsByUserName(dto.getUserName())) {
            return ApiResponse.error(HttpStatus.UNAUTHORIZED, "Tài khoản không tồn tại");
        }

        Optional<Users> user = userRepository.findByUserName(dto.getUserName());

        if (!passwordEncoder.matches(dto.getPassWord(), user.get().getPassWord())) {
            return ApiResponse.error(HttpStatus.UNAUTHORIZED, "Mật khẩu không đúng");
        }

        UserResponseDTO responseDTO = userMapper.toDTO(user.get());
        return ApiResponse.success(HttpStatus.OK, "Đăng nhập thành công", responseDTO);
	}

}
