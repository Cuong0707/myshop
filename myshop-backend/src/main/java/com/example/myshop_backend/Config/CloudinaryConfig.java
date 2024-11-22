package com.example.myshop_backend.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Configuration
public class CloudinaryConfig {
	@Bean
	public Cloudinary cloudinary(){
		return new Cloudinary(ObjectUtils.asMap(
				"cloud_name","myshop",
				"api_key","784689127874751",
				"api_secret","aYw_Iihtl1-5Yf8zWX5WFQ1u8L8"
		));
		
	}
}
