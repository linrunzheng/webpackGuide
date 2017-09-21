package com.winhong.cloudweb.service;

import com.winhong.cloudweb.pojo.YunAppOrg;

/**
 * @Description: 【证书查询】service接口
 * @author: zhousp
 * @date:   2017年3月3日 下午3:51:35
 */
public interface YunAppOrgService {

    /**
     * 权利证明编号查询
     * @param msg
     * @return
     */
   public YunAppOrg selectByCertificateNo(String certificateNo);
}
