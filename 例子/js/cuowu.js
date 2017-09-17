/*
* @Author: Thinkpad
* @Date:   2017-09-17 19:28:11
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-17 19:32:38
*/
let info =document.getElementById('info');
setInterval(function(){
	if(info.innerText<=0){
		location.replace('lizi.html');
	}else{
		info.innerText-=1;
	}
}, 1000);