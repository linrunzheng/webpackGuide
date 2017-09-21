package com.winhong.cloudweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.winhong.cloudweb.mapper.YunAppOrgMapper;
import com.winhong.cloudweb.pojo.YunAppOrg;

/**
 * @Description: 【证书查询】service实现层
 * @author: zhousp
 * @date:   2017年3月3日 下午3:53:30
 */
@Service
@Transactional
public class YunAppOrgServiceImpl implements YunAppOrgService {

    @Autowired
    private YunAppOrgMapper yunAppOrgMapper;

    /**
     * 权利证明编号查询
     * @param msg
     * @return
     */
    @Override
    public YunAppOrg selectByCertificateNo(String certificateNo) {
        return yunAppOrgMapper.selectByCertificateNo(certificateNo);
    }
}
