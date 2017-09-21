package com.winhong.cloudweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.winhong.cloudweb.mapper.AgentsMapper;
import com.winhong.cloudweb.pojo.Agents;

/**
 * @Description: 【成为渠道代理商】的service实现层
 * @author: zhousp
 * @date:   2017年3月3日 下午3:23:54
 */
@Service
@Transactional
public class AgentsServiceImpl implements AgentsService {

    @Autowired
    public AgentsMapper agentsMapper;

    /**
     * 【新增】操作
     */
    @Override
    public int insertAgents(Agents vo) {
        return agentsMapper.insertAgents(vo);
    }
}
