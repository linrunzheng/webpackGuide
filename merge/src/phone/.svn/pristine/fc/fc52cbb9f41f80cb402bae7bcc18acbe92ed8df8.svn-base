package com.winhong.cloudweb.common;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @Description: 日期操作类
 * @author: zhousp
 * @date:   2017年3月3日 下午3:15:06
 */
public class DateUtil {

    /**
     * 12小时制
     * 日期格式化格式 yyyy-MM-dd hh:mm:ss
     * @return
     */
    public static String getCurrentTime12(){
        SimpleDateFormat formate =new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        return formate.format(new Date());
    }

    /**
     * 24小时制
     * 日期格式化格式 yyyy-MM-dd HH:mm:ss
     * @return
     */
    public static String getCurrentTime24(){
        SimpleDateFormat formate =new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return formate.format(new Date());
    }

    /**
     * 日期 yyyy-MM-dd
     * @return
     */
    public static String getDate(){
        SimpleDateFormat formate =new SimpleDateFormat("yyyy-MM-dd");
        return formate.format(new Date());
    }

    /**
     * 中文时间
     * @return
     */
    public static String getZhDate(){
        return DateFormat.getDateInstance(DateFormat.FULL).format(new Date());
    }

    /**
     * 根据时间命名文件
     * @return
     */
    public static String getFileDate(){
        SimpleDateFormat formate =new SimpleDateFormat("yyyyMMddHHmmss");
        return formate.format(new Date()).toString()+ String.valueOf((int) Math.random()*100000)+".xva";
    }



    public static void main(String[] args) {
        System.out.println(getCurrentTime12());
        System.out.println(getCurrentTime24());
        System.out.println(getDate());
        System.out.println(getZhDate());
        System.out.println(getFileDate());
    }

}
