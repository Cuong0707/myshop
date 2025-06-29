package com.example.myshop_backend.reponsitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.myshop_backend.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{
	@Query("""
		    SELECT DISTINCT o FROM Order o
		    LEFT JOIN FETCH o.paymentLogs
		    LEFT JOIN FETCH o.orderProducts
		    WHERE o.orderId = :id
		""")
		Optional<Order> findById(@Param("id") Integer id);
	@Query("""
		    SELECT DISTINCT o FROM Order o
		    LEFT JOIN FETCH o.orderProducts op
		    LEFT JOIN FETCH op.product
		    WHERE o.orderId = :id
		""")
		Optional<Order> findWithOrderProducts(@Param("id") Integer id);
}
