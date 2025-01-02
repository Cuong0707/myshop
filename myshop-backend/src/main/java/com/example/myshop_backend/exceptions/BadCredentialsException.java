package com.example.myshop_backend.exceptions;

public class BadCredentialsException extends RuntimeException {
	public BadCredentialsException(String message) {
        super(message);
    }
}
