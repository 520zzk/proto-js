window.onload=function(){
 var Ohead=document.getElementById("header");
 var Ovideo=document.getElementById("video");	
 var Oct01=document.getElementById("ct-01");
 var Oct02=document.getElementById("ct-02");
 var Oct03=document.getElementById("ct-03");
 var Oct04=document.getElementById("ct-04");
 
 var dis=-42;
  function head(){
   	
	   
	   		 var t=1;
	   		dis+=t;
	   		Ohead.style.top=dis+"px";	/*alert(dis);*/
									
	   		if(dis==0){
	   		clearInterval(myset);
	   	}
   	
   	
   }
   
   var myset=setInterval(head,50);

   var dia=-910;
function video(){
	var t=30;
	dia+=t;
	Ovideo.style.marginLeft=dia+"px";
	Oct01.style.marginLeft=-dia+"px";
	Oct02.style.marginLeft=-dia+"px";
	Oct03.style.marginLeft=-dia+"px";
	Oct04.style.marginLeft=-dia+"px";
	if(dia>=0){
		Ovideo.style.marginLeft=-28+"px";
		clearInterval(myset1);
	}
	
}
  var myset1=setInterval(video,30);  
   aaa();
 
 
}
