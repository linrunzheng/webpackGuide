package com.winhong.cloudweb.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.winhong.cloudweb.common.DateUtil;
import com.winhong.cloudweb.common.MailUtil;
import com.winhong.cloudweb.common.SendMsgUtil;
import com.winhong.cloudweb.pojo.Agents;
import com.winhong.cloudweb.pojo.YunVendor;
import com.winhong.cloudweb.service.AgentsService;
import com.winhong.cloudweb.service.YunVendorService;

/**
 * @Description: 【成为渠道代理商】的控制层
 * @author: zhousp
 * @date:   2017年3月3日 下午3:21:07
 */
@RequestMapping("/agents")
@Controller
public class AgentsController {
    private static final Logger logger = LoggerFactory.getLogger(AgentsController.class);

    @Autowired
    public AgentsService agentsService;
    
    @Autowired
    public YunVendorService yunVendorService;

    /**
     * 【成为渠道代理商】注册
     * @param agents
     * @return
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> saveGuest(Agents agents) {
        try {
        	agents.setCreatetime(DateUtil.getCurrentTime24());
        	
        	if(logger.isInfoEnabled()){
        		logger.info("注册传入的参数agents = {}", agents);
        	}
        	
            int falg = this.agentsService.insertAgents(agents);
            if (falg > 0) {
            	
            	if(logger.isInfoEnabled()){
            		logger.info("注册成功，id = {}",agents.getId());
            	}
            	
            	/**
                 * 向登记成功的客户发送【短信】、【邮件】信息
                 */
            	YunVendor yunVendor = yunVendorService.getSuperAdministrator();
                 
                Map<String,Object> params = new HashMap<String,Object>();
                 //设置短信参数
                params.put("company", agents.getEnterprise());
                params.put("username", agents.getUserName());
                params.put("telphone", agents.getPhoneNumber());
     			SendMsgUtil.sendMsg(yunVendor.getPhone(), "SMS_35500004",params);
     			
     			MailUtil.sendEmail(yunVendor.getEmail(), "代理申请成功", 
     					agents.getEnterprise() + "申请成为渠道代理合作，申请人"+
     					agents.getUserName() + "，联系电话"+ agents.getPhoneNumber() + "，请及时处理。");
            	
                // 新增成功，响应201
                return ResponseEntity.status(HttpStatus.CREATED).build();
            }else{
            	if(logger.isInfoEnabled()){
            		logger.info("注册失败，guest = {}",agents);
            	}
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        // 新增失败，响应500
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}
