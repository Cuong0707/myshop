package com.example.myshop_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "warehouse")
public class Warehouse {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false, unique = true)
    private String name; // Tên kho hàng

    @Column(name = "location", nullable = false)
    private String location; // Địa chỉ kho

    @Column(name = "capacity", nullable = false)
    private Integer capacity; // Sức chứa tối đa của kho (đơn vị sản phẩm)

    @Column(name = "current_stock", nullable = false)
    private Integer currentStock = 0; // Số lượng hiện tại trong kho (tất cả sản phẩm)
}
