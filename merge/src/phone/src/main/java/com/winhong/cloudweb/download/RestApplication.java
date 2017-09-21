package com.winhong.cloudweb.download;

import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;

/**
 * 
 * @Description: REST 主应用
 * @author: zhousp
 * @date:   2017年3月8日 下午2:25:41
 */
public class RestApplication extends ResourceConfig {

	public RestApplication() {
		//资源类所在的包路径  
	    packages("com.winhong.cloudweb.download.resource");
	    
	    //注册 MultiPart
	    register(MultiPartFeature.class);
	}
}
