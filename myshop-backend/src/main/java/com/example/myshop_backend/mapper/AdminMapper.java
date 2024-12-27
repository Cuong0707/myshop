package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.AdminDto;
import com.example.myshop_backend.dto.AdminLogDto;
import com.example.myshop_backend.entity.Admin;
import com.example.myshop_backend.entity.AdminLog;

import java.util.List;
import java.util.stream.Collectors;

public class AdminMapper {
    // Chuyển đổi từ Admin entity sang AdminDto
    public static AdminDto adminToAdminDto(Admin admin) {
        if (admin == null) {
            return null;
        }

        // Chuyển đổi adminLogs từ List<AdminLog> thành List<AdminLogDto>
        List<AdminLogDto> adminLogDtos = admin.getAdminLogs() != null ? admin.getAdminLogs().stream()
                .map(AdminLogMapper::adminLogToAdminLogDto)  // Sử dụng AdminLogMapper để chuyển đổi
                .collect(Collectors.toList()) : null;

        return new AdminDto(
                admin.getAdminId(),
                admin.getUsername(),
                admin.getEmail(),
                admin.getRole(),
                adminLogDtos  // Chuyển adminLogs sang List<AdminLogDto>
        );
    }

    // Chuyển đổi từ AdminDto sang Admin entity
    public static Admin adminDtoToAdmin(AdminDto adminDto) {
        if (adminDto == null) {
            return null;
        }

        Admin admin = new Admin();
        admin.setAdminId(adminDto.getAdminId());
        admin.setUsername(adminDto.getUsername());
        admin.setEmail(adminDto.getEmail());
        admin.setRole(adminDto.getRole());
        List<AdminLog> adminLogs = adminDto.getAdminLogs() != null ? adminDto.getAdminLogs().stream()
        		.map(AdminLogMapper::adminLogDtoToAdminLog)
        		.collect(Collectors.toList()) : null;
        admin.setAdminLogs(adminLogs);

        return admin;
    }
}
