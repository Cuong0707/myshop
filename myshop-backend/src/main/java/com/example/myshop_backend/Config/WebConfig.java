package com.example.myshop_backend.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("http://192.168.1.177:3000","http://192.168.100.134:3000","http://localhost:3000","https://myshop-gray.vercel.app")// Lựa chọn các đường dẫn cho phép truy cập api
			.allowedMethods("GET", "POST", "PUT", "DELETE") // Các phương thức HTTP được phép
            .allowedHeaders("*") // Cho phép tất cả các headers
            .allowCredentials(true);
	}
}
