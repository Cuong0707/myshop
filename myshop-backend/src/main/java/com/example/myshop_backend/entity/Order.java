package com.example.myshop_backend.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.example.myshop_backend.enums.OrderStatus;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
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
@Table(name = "Orders")
public class Order {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private Users users;

    @Column(name = "order_date", nullable = false)
    private LocalDateTime orderDate;

    @Column(name = "payment_date")
    private LocalDateTime paymentDate;
    
    @Column(name = "delivery_adress")
    private String deliveryAdress;
    
    @Column(name = "delivery_phone" )
    private String deliveryPhone;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 50)
    private OrderStatus status;

    @ManyToOne
    @JoinColumn(name = "payment_method")
    @JsonBackReference
    private PaymentMethod paymentMethod;
    
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<PaymentLog> paymentLogs;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<OrderProduct> orderProducts;
    
    @PrePersist
    public void prePersist() {
        if (orderDate == null) {
            orderDate = LocalDateTime.now(); // Gán ngày hiện tại cho orderDate khi tạo order
        }
    }
    

}
