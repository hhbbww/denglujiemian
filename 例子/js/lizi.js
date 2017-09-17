/*
* @Author: Thinkpad
* @Date:   2017-09-15 17:15:35
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-17 19:26:37
*/
let name =document.getElementById('name');
let mima =document.getElementById('mima');
let button = document.getElementById('button');
button.onclick = function(){
	if (name.value.trim() == 'zhangsan' && mima.value.trim() == '123456') {
		alert('登陆成功')
	}else{
		location.replace("tijiao.html")
	}
	
}