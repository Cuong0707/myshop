package com.example.myshop_backend.dto;



import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminLogDto {
	private Integer logId;
    private Integer adminId;  
    private String action;
    private Date actionDate;
}
