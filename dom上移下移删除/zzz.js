
        var arrTab=[
            {
                id:1,
                name:'张三',
                age:23,
                sex:'男'
            },
            {
                id:2,
                name:'王五',
                age:22,
                sex:'男'
            },
            {
                id:3,
                name:'李四',
                age:32,
                sex:'男'
            },
            {
                id:4,
                name:'毛毛',
                age:18,
                sex:'女'
            },
            {
                id:5,
                name:'吱吱',
                age:18,
                sex:'女'
            },
            {
                id:6,
                name:'咋坤',
                age:22,
                sex:'男'
            },
            {
                id:7,
                name:'老妖',
                age:25,
                sex:'男'
            }

        ];
         
    var Tbody=document.getElementById('tab-body');
    xuanruan(arrTab);
    function xuanruan(arrt){
       
            for(var i=0;i<arrt.length;i++){
                var  Tr=document.createElement("tr");
                var td=document.createElement('td');
                td.innerHTML='<label class="slide"><input type="checkbox" class="checkAll" hidden><span></span></label>';
                 Tr.appendChild(td);
            for(attr in arrt[i]){
                var td=document.createElement('td');
                td.innerHTML=arrt[i][attr];
                Tr.appendChild(td);
            }
                var td=document.createElement('td');
                td.innerHTML='<img src="./images/上移.png" alt="" class="imgUp"><img src="./images/下移.png" alt="" class="imgDow"><img src="./images/删除.png" alt="" class="imgRem">';
                Tr.appendChild(td);
                Tbody.appendChild(Tr);
            }

            move(); 
    }
   
   

   var btn=document.getElementById('btn');
   btn.onclick=function(){
    var input01=document.getElementsByClassName("input-01")[0].value;
    var input02=document.getElementsByClassName("input-02")[0].value;
    var select=document.getElementById('select');
    var value=select.options[select.selectedIndex].value;/*option要加s*/ 
    var num=8;
    var str=[{
        id:num,
        name:input01,
        age:input02,
        sex:value
    }];
   
    num++;
    xuanruan(str);
   }

function move(){
    var inCheck=document.body.querySelectorAll("input[type='checkbox']");
    var bodyTr=Tbody.children;
   var imgUp=document.getElementsByClassName("imgUp");
   var imgDow=document.getElementsByClassName("imgDow");
   var imgRem=document.getElementsByClassName("imgRem");
  
   for(let i=0;i<bodyTr.length;i++){

        imgUp[i].onclick=function(){
          var x=this.parentNode.parentNode;
          var y=x.previousElementSibling;
          Tbody.insertBefore( x,y);
          
    
        }

        imgDow[i].onclick=function(){
          var x=this.parentNode.parentNode;
          var y=x.nextElementSibling;
          
        if(y){
            Tbody.insertBefore(y,x);
          }else{
            alert('到底了=-||');
            }
          }

        imgRem[i].onclick=function(){
            Tbody.removeChild(this.parentNode.parentNode);
        }

   }

}
  

