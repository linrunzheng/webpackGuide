import $ from 'jquery'
import './index.css'
import './index.scss'
$(function(){
	
	$(document).click(function(event) {
		var arr=["qqq","aaa","ccccc"];
		var newArr=arr.map(i=>{
			return new Promise(function(resolve,reject){
				setTimeout(()=>{
					resolve(i)
				},2000)
			})
		});
		Promise.all(newArr).then(function(value){
			alert(value)
		})

		$.ajax({
			url:'./api/',
			success:function(res){
				console.log(res)
			},
			error:function(e){
				alert(123132)
			}
		})
		
		
	});
})
