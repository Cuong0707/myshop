package com.example.myshop_backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CollectionDto {
	private Integer collectionId;
	private String collectionName;
	private List<Integer> productIds;
}
