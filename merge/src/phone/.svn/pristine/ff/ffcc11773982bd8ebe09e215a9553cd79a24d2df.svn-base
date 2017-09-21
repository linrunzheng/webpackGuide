package com.winhong.cloudweb.mapper;

import org.springframework.stereotype.Repository;

import com.winhong.cloudweb.pojo.Guest;

/**
 * @Description: 【免费试用体验】mapper映射接口
 * @author: zhousp
 * @date:   2017年3月3日 下午3:15:59
 */
@Repository
public interface GuestMapper {

    /**
     * 【新增】操作
     * @param guest
     * @return
     */
    int insert(Guest guest);

    /**
     * 【查询】操作
     * @param id
     * @return
     */
    public Guest queryGuestById(Long id);
    
    /**
     * 修改客户信息
     * @param guest
     * @return
     */
    public int updateGuest(Guest guest);
    
    /**
     * 删除客户信息
     * @param guest
     * @return
     */
    public int deleteGuest(Long id);
}
