package com.example.myshop_backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "inventory_log")
public class InventoryLog {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "warehouse_id", nullable = false)
    private Warehouse warehouse; // Kho hàng

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product; // Sản phẩm

    @Column(name = "change_quantity", nullable = false)
    private Integer changeQuantity; // Số lượng thay đổi (âm hoặc dương)

    @Column(name = "timestamp", nullable = false)
    private LocalDateTime timestamp; // Thời gian thay đổi

    @Column(name = "reason", length = 255)
    private String reason; // Lý do thay đổi (ví dụ: nhập hàng, xuất hàng, hủy đơn)
}
