package com.example.myshop_backend.service.Impl;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.entity.Users;
import com.example.myshop_backend.reponsitory.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
    private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user = userRepository.findByUserName(username)
		        .orElseThrow(() -> new UsernameNotFoundException("Không tìm thấy người dùng: " + username));

		    return new UserDetailsImpl(user);
	}

}
