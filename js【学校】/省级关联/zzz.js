/*
* @Author: Marte
* @Date:   2018-05-30 18:07:34
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-30 19:30:22
*/

var provinceArray=new Array('台湾','北京','上海','天津','重庆','河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','内蒙古','广西','西藏','宁夏','新疆','香港','澳门');
var cityArray=new Array();
   cityArray[0]=new Array('台北','台南','其他');
cityArray[1]=new Array('北京');
cityArray[2]=new Array('上海');
cityArray[3]=new Array('天津');
cityArray[4]=new Array('重庆');
cityArray[5]=new Array('石家庄','张家口','承德','秦皇岛','唐山','廊坊','保定','沧州','衡水','邢台','邯郸');
cityArray[6]=new Array('太原','大同','朔州','阳泉','长治','晋城','忻州','吕梁','晋中','临汾','运城');
cityArray[7]=new Array('沈阳','朝阳','阜新','铁岭','抚顺','本溪','辽阳','鞍山','丹东','大连','营口','盘锦','锦州','葫芦岛');
cityArray[8]=new Array('长春','白城','松原','吉林','四平','辽源','通化','白山','延边');
cityArray[9]=new Array('哈尔滨','齐齐哈尔','黑河','大庆','伊春','鹤岗','佳木斯','双鸭山','七台河','鸡西','牡丹江','绥化','大兴安');
cityArray[10]=new Array('南京','徐州','连云港','宿迁','淮阴','盐城','扬州','泰州','南通','镇江','常州','无锡','苏州');
cityArray[11]=new Array('杭州','湖州','嘉兴','舟山','宁波','绍兴','金华','台州','温州','丽水');
cityArray[12]=new Array('合肥','宿州','淮北','阜阳','蚌埠','淮南','滁州','马鞍山','芜湖','铜陵','安庆','黄山','六安','巢湖','池州','宣城');
cityArray[13]=new Array('福州','南平','三明','莆田','泉州','厦门','漳州','龙岩','宁德');
cityArray[14]=new Array('南昌','九江','景德镇','鹰潭','新余','萍乡','赣州','上饶','抚州','宜春','吉安');
cityArray[15]=new Array('济南','聊城','德州','东营','淄博','潍坊','烟台','威海','青岛','日照','临沂','枣庄','济宁','泰安','莱芜','滨州','菏泽');
cityArray[16]=new Array('郑州','三门峡','洛阳','焦作','新乡','鹤壁','安阳','濮阳','开封','商丘','许昌','漯河','平顶山','南阳','信阳','周口','驻马店');
cityArray[17]=new Array('武汉','十堰','襄攀','荆门','孝感','黄冈','鄂州','黄石','咸宁','荆州','宜昌','恩施','襄樊');
cityArray[18]=new Array('长沙','张家界','常德','益阳','岳阳','株洲','湘潭','衡阳','郴州','永州','邵阳','怀化','娄底','湘西');
cityArray[19]=new Array('广州','清远','韶关','河源','梅州','潮州','汕头','揭阳','汕尾','惠州','东莞','深圳','珠海','江门','佛山','肇庆','云浮','阳江','茂名','湛江');
cityArray[20]=new Array('海口','三亚');
cityArray[21]=new Array('成都','广元','绵阳','德阳','南充','广安','遂宁','内江','乐山','自贡','泸州','宜宾','攀枝花','巴中','达川','资阳','眉山','雅安','阿坝','甘孜','凉山');
cityArray[22]=new Array('贵阳','六盘水','遵义','毕节','铜仁','安顺','黔东南','黔南','黔西南');
cityArray[23]=new Array('昆明','曲靖','玉溪','丽江','昭通','思茅','临沧','保山','德宏','怒江','迪庆','大理','楚雄','红河','文山','西双版纳');
cityArray[24]=new Array('西安','延安','铜川','渭南','咸阳','宝鸡','汉中','榆林','商洛','安康');
cityArray[25]=new Array('兰州','嘉峪关','金昌','白银','天水','酒泉','张掖','武威','庆阳','平凉','定西','陇南','临夏','甘南');
cityArray[26]=new Array('西宁','海东','西宁','海北','海南','黄南','果洛','玉树','海西');
cityArray[27]=new Array('呼和浩特','包头','乌海','赤峰','呼伦贝尔盟','兴安盟','哲里木盟','锡林郭勒盟','乌兰察布盟','鄂尔多斯','巴彦淖尔盟','阿拉善盟');
cityArray[28]=new Array('南宁','桂林','柳州','梧州','贵港','玉林','钦州','北海','防城港','南宁','百色','河池','柳州','贺州');
cityArray[29]=new Array('拉萨','那曲','昌都','林芝','山南','日喀则','阿里');
cityArray[30]=new Array('银川','石嘴山','吴忠','固原');
cityArray[31]=new Array('乌鲁木齐','克拉玛依','喀什','阿克苏','和田','吐鲁番','哈密','博尔塔拉','昌吉','巴音郭楞','伊犁','塔城','阿勒泰');
cityArray[32]=new Array('香港');
cityArray[33]=new Array('澳门');

window.onload=function(){           /*||+++onload加载完后执行+++||*/
    init();
   
}
    // 初始化省份
    function init(){
        var provinceobj=document.getElementById("province");            
        for(var i=0;i<provinceArray.length;i++)
        {
            var optionobj=document.createElement("option"); /*添加一个option-----createElement<<<>>>创建元素*/
            optionobj.value=optionobj.text=provinceArray[i];/*给值*/
            provinceobj.options.add(optionobj);             /***在后面加入***/
        }
    }

    function selectProvince(){
        var provinceobj=document.getElementById("province");
        var cityobj=document.getElementById("city");
        var xiabiao=provinceobj.selectedIndex-1;    /***请选择省份最开始也是占有一个值的***/               
        for(var i=cityobj.options.length-1;i>0;i--)     /*清除上一次的选择的城市*/
        {
            cityobj.options.remove(i);              
        }
        if(xiabiao>=0){                 /*//--判断是否选择新省份--//*/

            for(var i=0;i<cityArray[xiabiao].length;i++)   /*通过判断一维数组个数，确定循环*/
            {
               var optionobj=document.createElement("option");
               optionobj.value=optionobj.text=cityArray[xiabiao][i];
               cityobj.options.add(optionobj);
            }
        }

    }


function showinfo(){
    var provinceobj=document.getElementById("province");
     var cityobj=document.getElementById("city");
     var xiabiao=provinceobj.selectedIndex-1;
     var xinxiobj=document.getElementById("xinxi");
     if(xiabiao<0){
        xinxi.innerText="";
     }
     else{
        xinxiobj.innerText="省份:"+provinceArray[xiabiao];
        var cityxiabiao=cityobj.selectedIndex-1;
        if(cityxiabiao>=0){
            xinxiobj.innerText+="城市"+cityArray[xiabiao][cityxiabiao];
        }
     }
}