package com.winhong.cloudweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.winhong.cloudweb.mapper.GuestMapper;
import com.winhong.cloudweb.pojo.Guest;

/**
 * @Description: 【免费试用体验】的service实现层
 * @author: zhousp
 * @date:   2017年3月3日 下午3:19:53
 */
@Service
@Transactional
public class GuestServiceImpl implements GuestService{

    @Autowired
    public GuestMapper guestMapper;


    /**
     * 【新增】操作
     */
    @Override
    public int insertGuest(Guest guest) {
        return guestMapper.insert(guest);
    }
    
    /**
     * 【根据id查询】操作
     */
    public Guest queryGuestById(Long id) {
        return this.guestMapper.queryGuestById(id);
    }

    /**
     * 【修改】操作
     */
	@Override
	public Boolean updateGuest(Guest guest) {
		return this.guestMapper.updateGuest(guest) == 1;
	}
	
    /**
     * 【删除】操作
     */
	@Override
	public Boolean deleteGuest(Long id) {
		return this.guestMapper.deleteGuest(id) == 1;
	}
}
