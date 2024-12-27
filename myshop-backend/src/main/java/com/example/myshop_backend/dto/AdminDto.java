package com.example.myshop_backend.dto;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminDto {
	private Integer adminId;
    private String username;
    private String email;
    private String role;
    private List<AdminLogDto> adminLogs;
}
