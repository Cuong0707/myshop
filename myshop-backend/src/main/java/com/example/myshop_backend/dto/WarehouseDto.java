package com.example.myshop_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WarehouseDto {
	private Integer id;
    private String name; // Tên kho hàng
    private String location; // Địa chỉ kho
    private Integer capacity; // Sức chứa tối đa
    private Integer currentStock; // Số lượng hiện tại
}
