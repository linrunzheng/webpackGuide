package com.winhong.cloudweb.pojo;

import java.io.Serializable;

/**
 * 
 * @Description: 【成为渠道代理商】实体类
 * @author: zhousp
 * @date:   2017年3月3日 下午3:22:06
 */
public class Agents implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;

    /*企业名称*/
    private String enterprise; 

    /*姓名*/
    private String userName;

    /*联系电话*/
    private String phoneNumber;

    /*联系邮箱*/
    private String email;

    /*申请时间*/
    private String createtime; 

    public Agents() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEnterprise() {
        return enterprise;
    }

    public void setEnterprise(String enterprise) {
        this.enterprise = enterprise;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCreatetime() {
        return createtime;
    }

    public void setCreatetime(String createtime) {
        this.createtime = createtime;
    }

	@Override
	public String toString() {
		return "Agents [id=" + id + ", enterprise=" + enterprise
				+ ", userName=" + userName + ", phoneNumber=" + phoneNumber
				+ ", email=" + email + ", createtime=" + createtime + "]";
	}
}