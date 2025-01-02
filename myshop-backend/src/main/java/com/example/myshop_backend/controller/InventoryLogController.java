package com.example.myshop_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myshop_backend.dto.InventoryLogDto;
import com.example.myshop_backend.service.InventoryLogService;

@RestController
@RequestMapping("/api/inventorylog")
public class InventoryLogController {
	@Autowired
	private InventoryLogService inventoryLogService;
	
	@PostMapping("/create")
	public ResponseEntity<InventoryLogDto> createInventoryLog(@RequestBody InventoryLogDto inventoryLogDto)
	{
		return new ResponseEntity<>(inventoryLogService.createInventory(inventoryLogDto),HttpStatus.CREATED);
	}
}
