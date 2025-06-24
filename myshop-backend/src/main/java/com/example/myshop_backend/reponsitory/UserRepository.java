package com.example.myshop_backend.reponsitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myshop_backend.entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {
	boolean existsByUserName(String userName);
	boolean existsByEmail(String email);
	Optional<Users> findByUserName(String userName);
	Optional<Users> findByEmail(String email);
}
