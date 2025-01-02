package com.example.myshop_backend.exceptions;

public class DuplicateRecordException extends RuntimeException {
	public DuplicateRecordException(String message) {
		super(message);
	}
}
