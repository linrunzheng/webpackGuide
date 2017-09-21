package com.winhong.cloudweb.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.winhong.cloudweb.common.DateUtil;
import com.winhong.cloudweb.pojo.Guest;
import com.winhong.cloudweb.service.GuestService;
import com.winhong.cloudweb.service.YunVendorService;

/**
 * @Description: 【首页】-【登记试用】
 * @author: zhousp
 * @date:   2017年3月2日 下午3:30:14
 */
@Controller
@RequestMapping("/guest")
public class GuestController {

    private static final Logger logger = LoggerFactory.getLogger(GuestController.class);

    @Autowired
    public GuestService guestService;
    
    @Autowired
    public YunVendorService yunVendorService;

    /**
     * 【免费试用体验】注册
     * 
     * @param user
     * @return
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> saveGuest(Guest guest) {
        try {
        	guest.setCreatetime(DateUtil.getCurrentTime24());
        	
        	if(logger.isInfoEnabled()){
        		logger.info("注册传入的参数guest = {}", guest);
        	}
        	
            int falg = this.guestService.insertGuest(guest);
            if (falg > 0) {
            	
            	if(logger.isInfoEnabled()){
            		logger.info("注册成功，id = {}",guest.getId());
            	}
            	
            	/**
                 * 注册成功，向登记成功的客户发送【短信】、【邮件】信息
                 *//*
    			YunVendor yunVendor = yunVendorService.getSuperAdministrator();
    			//设置短信参数
                Map<String,Object> params = new HashMap<String,Object>();
                params.put("company", guest.getEnterprise());
                params.put("username", guest.getGuestName());
                params.put("telphone", guest.getPhoneNumber());
    			SendMsgUtil.sendMsg(yunVendor.getPhone(), "SMS_35435024",params);
    			
    			//给【运营平台超级管理员】发送邮件通知
    			MailUtil.sendEmail(yunVendor.getEmail(), "试用申请成功", 
    							   "超融合一体机有来自" + guest.getEnterprise() + "的试用申请，申请人"
    			                   + guest.getGuestName() + "，联系电话" + guest.getPhoneNumber() + "，请及时处理。");*/
            	
                // 新增成功，响应201
                return ResponseEntity.status(HttpStatus.CREATED).build();
            }else{
            	if(logger.isInfoEnabled()){
            		logger.info("注册失败，guest = {}",guest);
            	}
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        // 新增失败，响应500
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
    
}
