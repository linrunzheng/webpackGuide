package com.winhong.cloudweb.common;

import java.util.Date;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.NoSuchProviderException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 * @Description: 发送邮件
 * @author: zhousp
 * @date:   2016年10月8日 上午9:24:59
 */
public class MailUtil {
	
	public static void main(String[] args) {
		MailUtil test = new MailUtil();
		test.sendEmail("410581706@qq.com", "这是测试邮件-标题111", "这是邮件主题2222！");
	}

	static int port = 25;   //smtp端口
	static String server = "smtp.263.net";   //smtp服务器地址
	static String from = "Winhong<siyouyun@winhong.com>";   //发送者
	static String user = "siyouyun@winhong.com";    //发送者地址
	static String password = "win15625076216";   //密码

	public static void sendEmail(String email, String subject, String body) {
		try {
			Properties props = new Properties();
			props.put("mail.smtp.host", server);
			props.put("mail.smtp.port", String.valueOf(port));
			props.put("mail.smtp.auth", "true");
			Transport transport = null;
			Session session = Session.getDefaultInstance(props, null);
			transport = session.getTransport("smtp");
			transport.connect(server, user, password);
			MimeMessage msg = new MimeMessage(session);
			msg.setSentDate(new Date());
			InternetAddress fromAddress = new InternetAddress(from);
			msg.setFrom(fromAddress);
			InternetAddress[] toAddress = new InternetAddress[1];
			toAddress[0] = new InternetAddress(email);
			msg.setRecipients(Message.RecipientType.TO, toAddress);
			msg.setSubject(subject, "UTF-8");	
			msg.setText(body, "UTF-8");
			msg.saveChanges();
			transport.sendMessage(msg, msg.getAllRecipients());
		} catch (NoSuchProviderException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
