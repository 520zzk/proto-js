function Moblide(obj,attr,rate,fanwei,fun1){/*滑动效果上下左右 obj==对象__arrt=="left...等"___rate==速度___fanwei==范围__fun1==回调函数*/
		
		rate=parseInt(getStyle(obj,attr))>fanwei?-rate:rate;
		 clearInterval(obj.times);
		 
		
	
		obj.times=setInterval(
			function(){

			var speed=parseInt(getStyle(obj,attr))+rate;
			
			if(speed<fanwei&&rate<0){	//向后
				speed=fanwei;
			}
			if(speed>fanwei&&rate>0){	//向前
				speed=fanwei;
			}
			obj.style[attr]=speed+'px';
			if(speed==fanwei ){			//停止
				clearInterval(obj.times);
				fun1&&fun1();
			}
		}				
		,30);
}


function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj)[attr];
	}
	/*currentStyle只兼容IE...getComputedStyle只兼容谷歌等，不兼容IE*/
}