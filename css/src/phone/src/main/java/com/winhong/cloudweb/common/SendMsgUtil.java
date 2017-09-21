package com.winhong.cloudweb.common;

import java.util.Map;

import com.taobao.api.ApiException;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;

/**
 * @Description: 发送【告警信息】短信工具类
 * @author: zhousp
 * @date:   2016年10月13日 下午2:42:25
 */
public class SendMsgUtil {
	
	private static final String URL = "https://eco.taobao.com/router/rest";
	private static final String APPKEY = "23480471";
	private static final String SECRET = "2688f8614d98bc0b9e9029d516f41153";
	private static final String EXTEND="云宏科技";
	private static final String SMS_TYPE="normal";
	private static final String SMS_FREE_SIGN_NAME="云宏信息";
	private static final String SMS_TEMPLATE_CODE="SMS_17785120";
	
	/**
	 * 发送【告警信息】短信
	 * @param recNum
	 * @param code
	 * @return
	 */
	public static String sendMsg4IdentityVerificationCode(String recNum,String code) {
		//获取验证码
		TaobaoClient client = new DefaultTaobaoClient(URL, APPKEY, SECRET);
		AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
		req.setExtend(EXTEND);  //公共回传参数，在“消息返回”中会透传回该参数
		req.setSmsType(SMS_TYPE);  //短信类型，传入值请填写normal
		req.setSmsFreeSignName(SMS_FREE_SIGN_NAME); //短信签名，传入的短信签名必须是在阿里大于“管理中心-短信签名管理”中的可用签名
		req.setSmsParamString("{\"code\":\"" + code + "\"}");
		
		req.setRecNum(recNum);
		req.setSmsTemplateCode(SMS_TEMPLATE_CODE);
		AlibabaAliqinFcSmsNumSendResponse rsp = null;
		try {
			rsp = client.execute(req);
		} catch (ApiException e) {
			e.printStackTrace();
			System.out.println(">>>【短信验证码发送失败】<<<");
			return "";
		}
		System.out.println(">>>【短信验证码发送后的返回信息】" + rsp.getBody() + "<<<");
		return code;
	}
	
	/**
	 * 发送【告警信息】短信
	 * @param recNum
	 * @param code
	 * @return
	 */
	public static String sendMsg4IdentityVerificationCode(String recNum,String company,String smsTemplateCode) {
		//获取验证码
		TaobaoClient client = new DefaultTaobaoClient(URL, APPKEY, SECRET);
		AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
		req.setExtend(EXTEND);  //公共回传参数，在“消息返回”中会透传回该参数
		req.setSmsType(SMS_TYPE);  //短信类型，传入值请填写normal
		req.setSmsFreeSignName(SMS_FREE_SIGN_NAME); //短信签名，传入的短信签名必须是在阿里大于“管理中心-短信签名管理”中的可用签名
		req.setSmsParamString("{\"company\":\"" + company + "\"}");
		
		req.setRecNum(recNum);
		req.setSmsTemplateCode(smsTemplateCode);
		AlibabaAliqinFcSmsNumSendResponse rsp = null;
		try {
			rsp = client.execute(req);
		} catch (ApiException e) {
			e.printStackTrace();
			System.out.println(">>>【短信验证码发送失败】<<<");
			return "";
		}
		System.out.println(">>>【短信验证码发送后的返回信息】" + rsp.getBody() + "<<<");
		return company;
	}
	
	/**
	 * 发送短信通用方法
	 * @param recNum : 接收短信的手机号码
	 * @param smsTemplateCode ： 短信模板
	 * @param params ： 短信参数
	 * @return
	 */
	public static void sendMsg(String recNum, String smsTemplateCode, Map<String,Object> params) {
		//获取验证码
		TaobaoClient client = new DefaultTaobaoClient(URL, APPKEY, SECRET);
		AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
		req.setExtend(EXTEND);  //公共回传参数，在“消息返回”中会透传回该参数
		req.setSmsType(SMS_TYPE);  //短信类型，传入值请填写normal
		req.setSmsFreeSignName(SMS_FREE_SIGN_NAME); //短信签名，传入的短信签名必须是在阿里大于“管理中心-短信签名管理”中的可用签名
		req.setSmsParamString(JacksonUtil.toJSon(params));
		
		req.setRecNum(recNum);
		req.setSmsTemplateCode(smsTemplateCode);
		AlibabaAliqinFcSmsNumSendResponse rsp = null;
		try {
			rsp = client.execute(req);
		} catch (ApiException e) {
			e.printStackTrace();
			System.out.println(">>>【短信验证码发送失败】<<<");
		}
		System.out.println(">>>【短信验证码发送后的返回信息】" + rsp.getBody() + "<<<");
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		SendMsgUtil sendMsgUtil = new SendMsgUtil();
		
		sendMsgUtil.sendMsg4IdentityVerificationCode("13570426854","告警内容xxxxxxxxxxxxxxxxxxxxxxxxx");
	}

}
