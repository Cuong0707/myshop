package com.example.myshop_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {
	private int userId;
    private String name;
    private String email;
}
