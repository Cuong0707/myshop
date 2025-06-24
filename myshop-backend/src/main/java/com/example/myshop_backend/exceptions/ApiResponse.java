package com.example.myshop_backend.exceptions;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ApiResponse<T> {
	private boolean success;
	private int status;
	private HttpStatus error;
	private String message;
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
	private LocalDateTime time = LocalDateTime.now();
	private T data;

	public ApiResponse(boolean success,HttpStatus status, String message) {
		this.success = success;
		this.status = status.value();
		this.error = status;
		this.message = message;
		this.time = LocalDateTime.now();
		this.data = null;
	}
	public ApiResponse(boolean success, HttpStatus status, String message,T data) {
		this.success = success;
		this.status = status.value();
		this.error = status;
		this.message = message;
		this.time = LocalDateTime.now();
		this.data = data;
	}
	public static <T> ApiResponse<T> success(HttpStatus status, String message, T data) {
		return new ApiResponse<>(true,status, message, data);
	}

	public static <T> ApiResponse<T> error(HttpStatus status, String message) {
		return new ApiResponse<>(false, status, message);
	}
	public static <T> ApiResponse<T> error(HttpStatus status, String message, T data) {
		return new ApiResponse<>(false, status, message, data);
	}
}
