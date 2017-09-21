package com.winhong.cloudweb.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.winhong.cloudweb.pojo.YunAppOrg;
import com.winhong.cloudweb.service.YunAppOrgService;

/**
 * @Description: 【证书编号查询】
 * @author: zhousp
 * @date:   2017年3月3日 下午3:50:42
 */
@RequestMapping("/yunAppOrg")
@Controller
public class YunAppOrgController {

    private static final Logger logger = LoggerFactory.getLogger(YunAppOrgController.class);

    @Autowired
    private YunAppOrgService yunAppOrgService;

    /**
     *  根据证书编号查询证书信息
     */
    @RequestMapping(value="{certificateNo}", method=RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<YunAppOrg> queryOrgByCertificateNo(@PathVariable("certificateNo") String certificateNo) {
        try {
        	if(logger.isInfoEnabled()){
        		logger.info("查询传入的参数certificateNo = {}", certificateNo);
        	}
        	YunAppOrg yunAppOrg = this.yunAppOrgService.selectByCertificateNo(certificateNo);
            if (null == yunAppOrg) {
                // 资源不存在，响应404
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            if(logger.isInfoEnabled()){
        		logger.info("查询得到的结果yunAppOrg = {}", yunAppOrg);
        	}
            // 资源存在，响应200
            // return ResponseEntity.status(HttpStatus.OK).body(user);
            return ResponseEntity.ok(yunAppOrg);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
}
