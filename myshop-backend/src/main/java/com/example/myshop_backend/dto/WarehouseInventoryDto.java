package com.example.myshop_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WarehouseInventoryDto {
	private Integer id;
    private Long warehouseId; // ID của kho
    private String warehouseName; // Tên kho (nếu cần hiển thị trong API)
    private Long productId; // ID của sản phẩm
    private String productName; // Tên sản phẩm (nếu cần hiển thị trong API)
    private Integer stockQuantity; // Số lượng sản phẩm trong kho
}
