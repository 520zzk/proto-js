

function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }

//对象，方向，原始数据，函数----obj==对象  arrt=="left....等"  original++++  var Oleft=parseInt(getStyle(aImg[0],'left')); fun1==回调函数
function shake ( obj, attr, original,endFn ) {
	
	
	
	var arr = [];			// 20, -20, 18, -18 ..... 0
	var num = 0;
	var timer = null;
		
	for ( var i=10; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
		
	clearInterval( obj.shake );
	
	obj.shake = setInterval(function (){
			
			
		obj.style[attr] = original + arr[num] + 'px';
		
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );

			endFn && endFn();
		}
	}, 50);
}
