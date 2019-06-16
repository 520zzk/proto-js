function Moblide(obj,attr,fanwei,fun1){/*滑动效果上下左右 obj==对象__arrt=="left...等"___rate==速度___fanwei==范围__fun1==回调函数*/

		clearInterval(obj.times);
		var icur=0;
		obj.times=setInterval(function(){
			
			icur=parseInt(getStyle(obj,attr));
			
			var speed=(fanwei-icur)/7;
			
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(icur==fanwei){
				clearInterval(obj.times);
				
				fun1&&fun1.call(obj);
			}
			
			obj.style[attr]=(icur+speed)+'px';
		},30);
}


function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj)[attr];/*加window的作用是做兼容*/
	}
	/*currentStyle只兼容IE...getComputedStyle只兼容谷歌等，不兼容IE*/
}