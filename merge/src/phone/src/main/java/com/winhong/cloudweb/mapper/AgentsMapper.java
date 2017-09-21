package com.winhong.cloudweb.mapper;

import org.springframework.stereotype.Repository;

import com.winhong.cloudweb.pojo.Agents;

/**
 * @Description: 【成为渠道代理商】的mapper映射接口
 * @author: zhousp
 * @date:   2017年3月3日 下午3:24:51
 */
@Repository
public interface AgentsMapper {

    /**
     * 【新增】操作
     * @param vo
     */
    int insertAgents(Agents vo);

}
