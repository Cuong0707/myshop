package com.example.myshop_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	private int id;
	private String name;
	private String email;
	private String address;
	private String paymentInfo;
	private String userName;
	private String passWord;
	private String confirmPassword;
}
