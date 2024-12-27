package com.example.myshop_backend.controller;

import com.example.myshop_backend.entity.Order;
import com.example.myshop_backend.enums.OrderStatus;
import com.example.myshop_backend.service.Impl.OrderServiceImpl;
import com.example.myshop_backend.service.OrderService;
import com.example.myshop_backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    // Tạo đơn hàng mới
    @PostMapping("/create")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        try {
            Order newOrder = orderService.createOrder(order);
            return new ResponseEntity<>(newOrder, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Lấy thông tin một đơn hàng bằng ID
    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer orderId) {
        Optional<Order> order = orderService.getOrderById(orderId);

        if (order.isPresent()) {
            return new ResponseEntity<>(order.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Lấy danh sách tất cả đơn hàng
    @GetMapping("/list")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    // Cập nhật trạng thái đơn hàng
    @PutMapping("/{orderId}/status")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Integer orderId, 
                                                    @RequestParam OrderStatus status) {
        Optional<Order> order = orderService.getOrderById(orderId);

        if (order.isPresent()) {
            Order updatedOrder = orderService.updateOrderStatus(orderId, status);
            return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Xử lý thanh toán cho đơn hàng
    @PostMapping("/{orderId}/pay")
    public ResponseEntity<?> processPayment(@PathVariable Integer orderId, 
                                            @RequestParam Integer paymentMethodId, 
                                            @RequestParam BigDecimal amount) {
        try {
            paymentService.processPayment(orderId, paymentMethodId, amount);
            return new ResponseEntity<>("Payment processed successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Payment processing failed: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
