/*
* @Author: 海苑小阁
* @Date:   2018-05-02 13:52:12
* @Last Modified by:   海苑小阁
* @Last Modified time: 2018-05-03 14:23:49
*/
function xuanze(clicknow){
	var  tabobj=document.getElementById("tabUl").children;//children() 方法返回返回被选元素的所有直接子元素。
		
	for(var i=0;i<tabobj.length;i++)
	{
		if(tabobj[i].className="on")				//判断on样式的标签
		{
			tabobj[i].className="";					//将其重置
			var linkpast=tabobj[i].getAttribute("linknow");//getAttribute() 方法返回指定属性名的属性值 

			document.getElementById(linkpast).className="nr yincang";
			
		}
	}
	clicknow.className="on";
	var nowlink=clicknow.getAttribute("linknow");
	document.getElementById(nowlink).className="nr xianshi";
}