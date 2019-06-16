
	var xxx=document.getElementById("div1");
	var imgs=xxx.getElementsByTagName("img");
	var dis=0;
	var myset=null;
	var num=1;
	function zzz(){
		dis-=5;
		xxx.style.top=dis+'px';
				
		if(-(xxx.offsetTop)>num*600)
		{
			num++;
		}

		if(num>imgs.length-1){
			num=1;					/*为1时是防止在一轮完后避免出现先判断的情况*/
			dis=0;
			xxx.style.top=0+"px";
			setMove();
		}
	}
	setMove();
	function setMove(){
		clearInterval(myset);
		myset=setInterval(zzz,30);
	}
		

	