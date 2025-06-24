package com.example.myshop_backend.Config;

import java.security.Key;
import java.util.Date;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	private final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 30; // 30 ngày

    // Tạo token
    public String generateToken(UserDetails user) {
        return Jwts.builder()
                .setSubject(user.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SECRET_KEY)
                .compact();
    }

    // Lấy username từ token
    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    // Kiểm tra token hết hạn chưa
    public boolean isTokenValid(String token) {
    	try {
            // Phân tích token với khóa ký để xác thực token
            Jwts.parserBuilder()
                    .setSigningKey(SECRET_KEY)  // Kiểm tra với SECRET_KEY
                    .build()
                    .parseClaimsJws(token);  // Parse và kiểm tra token
            return true;  // Token hợp lệ
        } catch (JwtException | IllegalArgumentException e) {
            System.out.println("why:"+token);
            return false;
        }
    }

    private Claims getClaims(String token) {
    	return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
