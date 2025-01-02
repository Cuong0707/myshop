package com.example.myshop_backend.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.myshop_backend.dto.InventoryLogDto;
import com.example.myshop_backend.mapper.InventoryLogMapper;
import com.example.myshop_backend.reponsitory.InventoryLogReponsitory;
import com.example.myshop_backend.service.InventoryLogService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class InventoryLogServiceImpl implements InventoryLogService{
	@Autowired
	private InventoryLogReponsitory inventoryLogReponsitory;
	
	@Override
	public InventoryLogDto createInventory(InventoryLogDto inventoryLogDto) {
		return InventoryLogMapper.inventoryLogToDto(inventoryLogReponsitory.save(InventoryLogMapper.dtoToInventoryLog(inventoryLogDto)));
	}
	
}
