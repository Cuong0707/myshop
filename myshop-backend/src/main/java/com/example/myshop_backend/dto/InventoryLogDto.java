package com.example.myshop_backend.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InventoryLogDto {
	private Integer id;
    private Integer warehouseId; // ID của kho
    private String warehouseName; // Tên kho (nếu cần hiển thị)
    private Integer productId; // ID của sản phẩm
    private String productName; // Tên sản phẩm (nếu cần hiển thị)
    private Integer changeQuantity; // Số lượng thay đổi
    private LocalDateTime timestamp; // Thời gian thay đổi
    private String reason; // Lý do thay đổi
}
