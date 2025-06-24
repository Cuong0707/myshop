package com.example.myshop_backend.dto;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class CheckoutRequest {
	private String email;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private Integer paymentMethod;
    private List<ProductOrderDTO> products;

    @Data
    public static class ProductOrderDTO {
        private Integer productId;
        private Integer quantity;
        private double price;
    }
}

