package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.OrderDto;
import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.exceptions.NotFoundException;
import com.example.myshop_backend.reponsitory.UserRepository;

public class OrderMapper {
	
	private static UserRepository userRepository;

    // Chuyển đổi từ OrderDto sang Order entity
	public static OrderDto orderToDto(Order order)
	{
		if (order==null) {
			return null;
		}
		return new OrderDto(
				order.getOrderId(),
				order.getUsers().getUserId(),
				order.getStatus(),
				order.getPaymentMethod()
				);
	}
    public static Order orderDtoToOrder(OrderDto orderDto) {
        if (orderDto == null) {
            return null;
        }

        Order order = new Order();
        order.setOrderId(orderDto.getOrderID());
        order.setUsers(userRepository.findById(orderDto.getUserId())
	            .orElseThrow(() -> new NotFoundException("Invalid User ID: "+orderDto.getUserId())));
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
