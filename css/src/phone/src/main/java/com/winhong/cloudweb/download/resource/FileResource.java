package com.winhong.cloudweb.download.resource;

import java.io.File;
import java.io.UnsupportedEncodingException;

import javax.activation.MimetypesFileTypeMap;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @Description: RESTful 文件下载、文件上传
 * @author: zhousp
 * @date:   2017年3月8日 下午2:25:54
 */
@Path("files")
public class FileResource {
	
	/**
	 * 文件下载
	 * 
	 * @return
	 * @throws UnsupportedEncodingException
	 */
    @GET
    @Path("download")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public Response downloadFile(@javax.ws.rs.QueryParam("filepath") String filepath) throws UnsupportedEncodingException {

    	File file = new File(filepath);
		if (file.isFile() && file.exists()) {
			String mt = new MimetypesFileTypeMap().getContentType(file);
			String fileName = file.getName();
			
			//处理文件名称编码
			fileName = new String(fileName.getBytes("utf-8"),"ISO8859-1");
			
			return Response.ok(file, mt)
					.header("Content-disposition","attachment;filename=" + fileName)
					.header("ragma", "No-cache")
					.header("Cache-Control", "no-cache").build();

		} else {
			return Response.status(Response.Status.NOT_FOUND).entity("下载失败，未找到该文件").build();
		}
	}
}
