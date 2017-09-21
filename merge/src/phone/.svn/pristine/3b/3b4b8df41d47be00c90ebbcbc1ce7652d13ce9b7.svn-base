package com.winhong.cloudweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.winhong.cloudweb.mapper.YunVendorMapper;
import com.winhong.cloudweb.pojo.YunVendor;

/**
 * @Description: 运营平台超级管理员service实现层
 * @author: zhousp
 * @date:   2017年3月3日 下午3:20:15
 */
@Service
@Transactional
public class YunVendorServiceImpl implements YunVendorService{

	@Autowired
	public YunVendorMapper yunVendorMapper;
	
	@Override
	public YunVendor getSuperAdministrator() {
		return yunVendorMapper.getSuperAdministrator();
	}
}
