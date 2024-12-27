package com.example.myshop_backend.mapper;

import com.example.myshop_backend.dto.AdminLogDto;
import com.example.myshop_backend.entity.AdminLog;
import com.example.myshop_backend.reponsitory.AdminRepository;

public class AdminLogMapper {

	private static AdminRepository adminRepository;
	
    // Chuyển từ AdminLog entity sang AdminLogDto
    public static AdminLogDto adminLogToAdminLogDto(AdminLog adminLog) {
        if (adminLog == null) {
            return null;
        }

        return new AdminLogDto(
                adminLog.getLogId(),
                adminLog.getAdmin().getAdminId(),  // Chỉ lấy adminId
                adminLog.getAction(),
                adminLog.getActionDate()
        );
    }
    
    // Chuyển từ AdminLogDto sang AdminLog entity
    public static AdminLog adminLogDtoToAdminLog(AdminLogDto adminLogDto) {
        if (adminLogDto == null) {
            return null;
        }

        AdminLog adminLog = new AdminLog();
        adminLog.setLogId(adminLogDto.getLogId());
        adminLog.setAdmin(adminRepository.findById(adminLogDto.getAdminId()).orElse(null));
        adminLog.setAction(adminLogDto.getAction());
        adminLog.setActionDate(adminLogDto.getActionDate());

        return adminLog;
    }
}
