package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.InventoryLogDto;
import com.example.myshop_backend.entity.InventoryLog;
import com.example.myshop_backend.entity.Product;
import com.example.myshop_backend.entity.Warehouse;
import com.example.myshop_backend.reponsitory.ProductRepository;
import com.example.myshop_backend.reponsitory.WarehouseReponsitory;

public class InventoryLogMapper {
	
	private static WarehouseReponsitory warehouseReponsitory;
	private static ProductRepository productRepository;
	
	public static InventoryLog dtoToInventoryLog(InventoryLogDto inventoryLogDto)
	{
		Product product = productRepository.findById(inventoryLogDto.getProductId()).
				orElseThrow(()-> new IllegalArgumentException("Invalid Product Id"));
		Warehouse warehouse = warehouseReponsitory.findById(inventoryLogDto.getWarehouseId()).
				orElseThrow(()-> new IllegalArgumentException("Invalid Warehouse Id"));
		return new InventoryLog(
				inventoryLogDto.getId(),
				warehouse,
				product,
				inventoryLogDto.getChangeQuantity(),
				inventoryLogDto.getTimestamp(),
				inventoryLogDto.getReason()
				);
	
	}
	public static InventoryLogDto inventoryLogToDto(InventoryLog inventoryLog) {
		
		return new InventoryLogDto(
				inventoryLog.getId(),
				inventoryLog.getWarehouse().getId(),
				inventoryLog.getWarehouse().getName(),
				inventoryLog.getProduct().getProductId(),
				inventoryLog.getProduct().getName(),
				inventoryLog.getChangeQuantity(),
				inventoryLog.getTimestamp(),
				inventoryLog.getReason()
				);
	}
}
