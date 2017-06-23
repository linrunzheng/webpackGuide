import $ from 'jquery'
import '../css/car/car.scss'

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
			console.log(value)
		})
		var test=async function(v){
			await setTimeout(function(){
				return v
			},2000)
		}
		test(11111111111111111).then(function(val){
			console.log(val)
		})

		
	});
})
