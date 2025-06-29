package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.OrderProductDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.entity.OrderProduct;
import com.example.myshop_backend.entity.OrderProductKey;
import com.example.myshop_backend.entity.Product;

public class OrderProductMapper {
	public static OrderProductDto toDto(OrderProduct orderProduct) {
		if (orderProduct == null || orderProduct.getProduct() == null) return null;

		OrderProductDto dto = new OrderProductDto();
		dto.setProductId(orderProduct.getProduct().getProductId());
		dto.setProductName(orderProduct.getProduct().getName());
		dto.setQuantity(orderProduct.getQuantity());
		dto.setPrice(orderProduct.getPrice());
		return dto;
	}
	public static OrderProduct toEntity(OrderProductDto dto, Order order, Product product) {
		if (dto == null || product == null || order == null) return null;

		OrderProduct orderProduct = new OrderProduct();
		OrderProductKey key = new OrderProductKey(order.getOrderId(), product.getProductId());

		orderProduct.setId(key);
		orderProduct.setOrder(order);
		orderProduct.setProduct(product);
		orderProduct.setQuantity(dto.getQuantity());
		orderProduct.setPrice(dto.getPrice());

		return orderProduct;
	}
}
