// function starMove(obj, attr,iTarget, iSpeed) {
//     /*对象，属性，范围，速度（透明度按100来）*/
//     clearInterval(obj.iTimer);
//     var iCur=0;
//     obj.iTimer = setInterval(function(){

//         if(attr=="opacity"){
//             iCur = Math.round(css( obj, 'opacity' ) * 100);	//29.999900000045
//         }
//          else {
//              iCur=parseInt(css(obj,attr));
              
//             }

//         if(iCur==iTarget){
//             clearInterval(obj.iTimer);
//         }else{
//                 if(attr=='opacity')
//                 {
//                      obj.style.opacity = (iCur + iSpeed) / 100;
//                     obj.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
//                 }else{
//                     obj.style[attr]= iCur + iSpeed +'px';
//                     console.log( obj.style[attr]);
                
//                 }
//         }
//        }, 1000/60);
// }
//------------------------------------------------

function starMove(obj, json, iSpeed,fu) {
    /*对象，属性范围，速度（透明度按100来）*/

    clearInterval(obj.iTimer);
    var iCur=0;
    obj.iTimer = setInterval(function(){

        /*每走一下就把运动属性推动一次*/
        var t=true;
        var iSpeed=iSpeed;
        for(var attr in json){
            var iTarget=json[attr];
            if(attr=="opacity"){
                        iCur = Math.round(css( obj, 'opacity' ) * 100);	//29.999900000045
                    }
                    else {
                        iCur=parseInt(css(obj,attr));
                     
                        }
                        iSpeed=(iTarget-iCur)/10;
                        iSpeed=iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                    if(iCur!=iTarget){/*如果还有没到目标的*/
                       t=false;
                       if(attr=='opacity')
                            {
                                obj.style.opacity = (iCur + iSpeed) / 100;
                                obj.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
                            }else{
                                obj.style[attr]= iCur + iSpeed +'px';
                               
                            
                            }
                    }
        }
    /*查看所有的属性是不是都到了目标点*/
    if(t){
        clearInterval(obj.iTimer);
        fu&&fu.call(obj);
    }




       }, 1000/60);
}

function css(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj)[attr];
    }
}