
	var zhaoD=document.getElementById("zhezhao");
	var objP=document.getElementById("p1");
	var ul1=document.getElementById("ul1");
	var lis1=ul1.getElementsByTagName("li");
	var ul2=document.getElementById("ul2");
	var lis2=ul2.getElementsByTagName("li");
	var ul3=document.getElementById("ul3");
	var lis3=ul3.getElementsByTagName("li");
	var Odiv2=document.getElementById("div2");

	objP.onclick=function (){
		zhaoD.style.display="block";
	}

	for(var i=0;i<lis1.length;i++)
	{	
																		/*console.log控制台输出*/
		lis1[i].onclick=function(){
		Odiv2.className=this.className;			/*切记循环中的函数里面的i是最高值，所以不要再循环中用函数循环*/
		}
		lis2[i].onclick=function(){
		Odiv2.style.width=this.innerHTML+"px";
		}
		lis3[i].onclick=function(){
		Odiv2.style.height=this.innerHTML+"px";
		}
	}
	var Span1=document.getElementById("span1");
	var Span2=document.getElementById("span2");
	Span1.onclick=function(){
		Odiv2.style.cssText='';				/*清楚行内样式*/
		Odiv2.className='';					
	}
	Span2.onclick=function(){
		zhaoD.style.display="none";
	}