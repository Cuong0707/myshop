package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.reponsitory.UserRepository;

public class OrderMapper {
	
	private static UserRepository userRepository;

    // Chuyển đổi từ OrderDto sang Order entity
    public static Order orderDtoToOrder(OrderDto orderDto) {
        if (orderDto == null) {
            return null;
        }

        Order order = new Order();
        order.setOrderId(orderDto.getOrderID());
        order.setUsers(userRepository.findById(orderDto.getUserId())
	            .orElseThrow(() -> new IllegalArgumentException("Invalid User ID")));
        order.setOrderDate(null);
        order.setPaymentDate(null);
        order.setStatus(orderDto.getOrderStatus());
        order.setPaymentMethod(orderDto.getPaymentMethod());
        
        /*
         * Chỉnh sửa thêm order.setOrderproduct để lấy danh sách và số lượng sản phẩm
         */

        return order;
    }
}
