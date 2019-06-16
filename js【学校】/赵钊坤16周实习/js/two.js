window.onload=function(){
 var Ohead=document.getElementById("header");
 var Odiv=document.getElementsByClassName("cn-box");
 
// var dis=-125;
//function head(){
//			var t=4;
//	   		dis+=t;
//	   		Ohead.style.marginTop=dis+"px";	/*alert(dis);*/
//									
//	   		if(dis>0){
//	   		clearInterval(myset);
//	   	}
// 	
// 	
// }
// 
// var myset=setInterval(head,50);

for(var i=0;i<5;i++)
{	var t=i%2;
	if(t==1){
		Odiv[i].style.position="relative";
		Odiv[i].style.left=-200+"%";
	}
	if(t==0){
		Odiv[i].style.position="relative";
		Odiv[i].style.left=200+"%";
	}
}

var t=200;
function ddd(){
	t-=4;
	Odiv[0].style.left=t+"%";
	Odiv[2].style.left=t+"%";
	Odiv[4].style.left=t+"%";
	if(t==0){
		clearInterval(myset1);
	}
}
var myset1=setInterval(ddd,30);
var x=200;
function aaa(){
	x-=4;
	Odiv[1].style.left=-x+"%";
	Odiv[3].style.left=-x+"%";
	if(x==0){
		clearInterval(myset2);
	}
}

var myset2=setInterval(aaa,30);

var Oli=document.getElementById("fanye-ul").getElementsByTagName("li");
var Ocbox=document.getElementById("cn-box");

for(var i=0;i<6;i++){
	
	console.log(Oli[i]);
	Oli[i].index=i;			//解决循环中的直接跳到最后
	Oli[i].onclick=function(){
	
		if(this.index<3){
			
			for(var j=0;j<5;j++){
 			Odiv[j].style.display="block";
 		}
 		Ocbox.style.display="none";
		}
		if(this.index>2)	
		{
			for(var j=0;j<5;j++){
 			Odiv[j].style.display="none";
 		}
 		Ocbox.style.display="block";
		}
	}
	
}

}

   
   

