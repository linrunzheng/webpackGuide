package com.winhong.cloudweb.mapper;

import org.springframework.stereotype.Repository;

import com.winhong.cloudweb.pojo.YunVendor;

/**
 * @Description: 【运营平台用户管理员】mapper映射接口
 * @author: zhousp
 * @date:   2017年3月3日 下午3:16:43
 */
@Repository
public interface YunVendorMapper {

	//获取超级管理员的信息
	YunVendor getSuperAdministrator();
}
