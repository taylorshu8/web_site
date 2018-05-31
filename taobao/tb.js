//等待页面




//搜索栏效果
function onc(e,id) {
    var ele=document.getElementsByClassName('tb_top2_shtop_li');
    var els=document.getElementsByClassName('tb_top2_shbot');
    var imge=document.getElementById('inputimg');
        for(var i=0;i<els.length;i++){
            els[i].style.visibility="hidden";
        }
        for( i=0;i<ele.length;i++){
            ele[i].className=ele[i].className.replace('tb_top2_shtopact'," ");
        }
    document.getElementById(id).style.visibility = "visible";
    e.currentTarget.className += " tb_top2_shtopact";
    if(id === "shbot2"||id === "shbot3"){
        imge.style.display="none"
    }
    else{imge.style.display="block"}
}
function keyd(evt){
    if(evt.currentTarget.value){
        evt.currentTarget.style.backgroundImage='none';

    }
    else{
        evt.currentTarget.style.backgroundImage='url("icon/search.png")';
    }
}
function qrclose(){
    document.getElementById('tb_top2_mtb').style.display="none";
}


//幻灯片1主动画
var tb_md_mdslide=document.getElementById('tb_md_mdslide');
var tb_slide1sliplf=document.getElementById('tb_slide1sliplf');
var tb_slide1sliprt=document.getElementById('tb_slide1sliprt');
var box=document.getElementById("tb_slide1");
var left=box.offsetLeft;
var img=document.getElementById("tb_slide1").getElementsByTagName("img");
var circle=document.getElementById('tb_slide1bot').getElementsByTagName('li');
var animated=false;
function slide1(){
    slide1right();
    //     //单张动画效果
    //     anima=setInterval(function () {
    //         left=left-40;
    //         box.style.left =left +"px";
    //         if(((left/520)%1===0)){
    //             animated=false;
    //             clearInterval(anima);
    //         }
    //     },10);
    //     //整体动画效果
    //     if (left >-520*(img.length-2)) {
    //  } else {
    //     left=0;
    //     box.style.left =left +"px";
    //  }
    // for(var i=0;i<circle.length;i++){
    //     circle[i].className=circle[i].className.replace('active'," ");
    // }
    // circle[Math.abs(left/520)].className+=" active";
}
function slide1right(){
    if (!animated) {
        for(var i=0;i<circle.length;i++){
            circle[i].className=circle[i].className.replace('active'," ");
        }
        anima=setInterval(function () {
            animated=true;
            left = left - 40;
            box.style.left = left + "px";
            if (((left / 520) % 1 === 0)) {
                animated = false;
                clearInterval(anima);
            }
        },10);
        if(left <=-520*(img.length-2)){
            left=0;
        }
        circle[Math.abs(left/520)].className+=" active";
    }
}
var timer=setInterval(function(){slide1();},5000);
function cironclick(event){
    if(!animated){
        for(var i=0;i<circle.length;i++){
            circle[i].className=circle[i].className.replace('active'," ");
        }

        var  e = event.target;
        var prev = e.previousSibling;
        var j = 1;
        while(prev){
            if(prev.nodeType!==1){
                prev = prev.previousSibling;
            } else {
                prev = prev.previousSibling;
                j++;
            }
        }
        var k=Math.abs(Math.abs(left/520)-j);
        if(-left/520>j){
            anima=setInterval(function () {
                animated=true;
                left=left+40;
                box.style.left =left +"px";
                if(left/520>=-j){
                    animated=false;
                    clearInterval(anima);
                }
            },10/j);
        }
        else if(-left/520<j){
            anima=setInterval(function () {
                animated=true;
                left=left-40 ;
                box.style.left =left +"px";
                if(left/520<=-j){
                    animated=false;
                    clearInterval(anima);
                }
            },10/j);
        }
        circle[j-1].className+=" active";
    }
}

//幻灯片2
var box2=document.getElementById("tb_slide2box");
var left2=box2.offsetLeft;
var div=document.getElementsByClassName("tb_slide2box0");
var bar=document.getElementById('tb_md_mdtmallbot').getElementsByTagName('li');
var count=document.getElementById('tb_slide2count');
function slide2() {
    if(!animated){
        anima2=setInterval(function () {
            animated=true;
            left2=left2-40;
            box2.style.left =left2 +"px";
            if((((left2-1)/520)%1===0)){
                animated=false;
                clearInterval(anima2);
            }
        },10);
        //整体动画效果
        if (left2-1<=-520*(div.length-2)) {
            left2=1;
        }
        for(var i=0;i<bar.length;i++){
            bar[i].className=bar[i].className.replace('active'," ");
        }
        bar[Math.abs((left2-1)/520)].className+=" active";
        count.innerHTML=-(left2-1)/520+1;
    }
}
//幻灯片2左滑
function slide2left(){
    if(!animated){
        for(var i=0;i<bar.length;i++){
            bar[i].className=bar[i].className.replace('active'," ");
        }
        anima2=setInterval(function () {
            animated=true;
            left2=left2+40;
            box2.style.left =left2 +"px";
            if(((((left2-1)/520-1))%1===0)){
                animated=false;
                clearInterval(anima2);
            }
        },10);
        if(left2-1 >=-520){
            left2=-520*(div.length-1)+1;
        }
        bar[Math.abs((left2-1)/520)-2].className+=" active";
        count.innerHTML=-(left2-1)/520-1;
    }
}
//幻灯片2右滑
function slide2right(){
    if(!animated){
        for(var i=0;i<bar.length;i++){
            bar[i].className=bar[i].className.replace('active'," ");
        }
        anima2=setInterval(function () {
            animated=true;
            left2=left2-40;
            box2.style.left =left2 +"px";
            if((((left2-1)/520)%1===0)){
                animated=false;
                clearInterval(anima2);
            }
        },10);
        if(left2-1 <=-520*(div.length-2)){
            left2=1;
        }
        bar[Math.abs((left2-1)/520)].className+=" active";
        count.innerHTML=-(left2-1)/520+1;
    }
}
//幻灯片2鼠标悬停停止定时器

var timer2 =setInterval("slide2()",5000);
function slide2enter() {
    clearInterval(timer2);
}
//幻灯片1鼠标离开打开定时器
function slide2leave() {
    timer2=setInterval("slide2()",5000);
}
//幻灯片3
var container3=document.getElementById("tb_slide3");
var box3=document.getElementById("tb_slide3box");
var a=box3.getElementsByTagName("a");
var top1=box3.offsetTop;
var timer3 =setInterval("slide3()",5000);
function slide3() {
    if(top1<0){
        top1=top1+73;
    }else{
        top1=-73*(a.length-1);
    }
    box3.style.top=top1+"px";
}
container3.onmouseover=slide3over;
container3.onmouseout=slide3out;
function slide3over() {
    clearInterval(timer3);
}
function slide3out() {
    timer3=setInterval("slide3()",5000);
}
//刷新滚动条不变
// window.onbeforeunload = function () {
//     var scrollPos;
//     if (typeof window.pageYOffset != 'undefined') {
//         scrollPos = window.pageYOffset;
//     }
//     else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
//         scrollPos = document.documentElement.scrollTop;
//     }
//     else if (typeof document.body != 'undefined') {
//         scrollPos = document.body.scrollTop;
//     }
//     document.cookie = "scrollTop=" + scrollPos; //存储滚动条位置到cookies中
// };

//加载图片





//window.onload=function (){
//幻灯片1

    //幻灯片1左滑
    tb_slide1sliplf.onclick=function(){
            if (!animated) {
                for(var i=0;i<circle.length;i++){
                    circle[i].className=circle[i].className.replace('active'," ");
                }
                anima=setInterval(function () {
                    animated = true;
                    left = left + 40;
                    box.style.left = left + "px";
                    if (((left / 520) % 1 === 0)) {
                        animated = false;
                        clearInterval(anima);
                    }
                },10);
                if(left >=-520){
                    left=-520*(img.length-1);
                }
                circle[Math.abs(left/520)-2].className+=" active";
            }
    };
    //幻灯片1右滑
    tb_slide1sliprt.onclick=function () {
        slide1right();
    };

// //幻灯片鼠标回到窗口打开定时器
//     window.onfocus=function(){
//         timer=setInterval("slide1()",5000);
//         timer2=setInterval("slide2()",5000);
//         timer3=setInterval("slide3()",5000);
//     };
// //幻灯片鼠标离开窗口停止定时器
//     window.onblur=function(){
//         clearInterval(timer);
//         clearInterval(timer2);
//         clearInterval(timer3);
//     };

    //幻灯片1鼠标悬停停止定时器
    tb_md_mdslide.onmouseenter=function () {
        clearInterval(timer);
    };
    //幻灯片1鼠标离开打开定时器
    tb_md_mdslide.onmouseleave=function(){
        timer=setInterval("slide1()",5000);
    };


    //刷新后滚动条位置不变
    // if (document.cookie.match(/scrollTop=([^;]+)(;|$)/) != null) {
    //     var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/); //cookies中不为空，则读取滚动条位置
    //     document.documentElement.scrollTop = parseInt(arr[1]);
    //     document.body.scrollTop = parseInt(arr[1]);
    // }
//右侧公告栏
    var tag=document.getElementById('tb_md_rtnoticetop').getElementsByTagName('li');
    var block=document.getElementById('tb_md_rtnoticebot').getElementsByTagName('ul');
    for (i=0;i<tag.length;i++){
        tag[i].onmouseover=function () {
            for (j=0;j<tag.length;j++){
                block[j].className="hide";
                tag[j].className=tag[j].className.replace('active',"");

            }
            var myindex= parseInt(this.getAttribute('index'));
            block[myindex-1].className="show";
            tag[myindex-1].className+="active";
        }
    }
//话费 旅行 窗口 动画
    var clc=document.getElementsByClassName('clc');
    var clcblock=document.getElementsByClassName('conve_contianer');
    for(i=0;i<clc.length;i++){



        clc[i].onmouseenter=function () {
            for(j=0;j<clc.length;j++){
                clc[j].className = clc[j].className.replace(" selected", "");
                clcblock[j].style.display="none"
            }
            var index= parseInt(this.getAttribute('index'));
            clc[index].className+=" selected";
            clcblock[index].style.display="block"
        }
    }
//关闭充值窗口
    var conve_close=document.getElementById('conve_close');
    var conve_contianer=document.getElementById('conve_contianer');
    conve_close.onclick=function(){
        conve_contianer.style.display="none";
        clc[0].className = clc[0].className.replace(" selected", "");
    };
//话费动画
    var contianer_a=document.getElementById('contianer_nav').getElementsByTagName('a');
    var contianerbox=document.getElementById('contianerbox');

    for(i=0;i<contianer_a.length;i++){
        contianer_a[i].onmouseover=function(){
            var aindex= parseInt(this.getAttribute('index'));
            for (j=0;j<contianer_a.length;j++) {
                contianer_a[j].className = contianer_a[j].className.replace("active", "");
            }
            contianer_a[aindex-1].className="active";

            contianerbox.style.left=parseInt(10 - (aindex - 1) * 288)+"px";
        }
    }
//话费
    var phonefareinput=document.getElementById('phonefareinput');
    var phonefare=document.getElementById('phonefareprice').getElementsByTagName("li");
    var deposit=document.getElementById('fareprice');
    var depositsale=document.getElementById('depositsale');
    var conve_drop=document.getElementById('phonefareprice');
    phonefareinput.onclick=function () {
        if (conve_drop.style.display ==="none") {
            conve_drop.style.display="block";
        }
        else{
            conve_drop.style.display="none";
        }
    };

    for(i=0;i<phonefare.length;i++){

        phonefare[i].onclick=function () {

            for (j=0;j<phonefare.length;j++) {
                phonefare[j].className = phonefare[j].className.replace("seleted", "");
            }
            var myindex= parseInt(this.getAttribute('index'));
            var depositprice=phonefare[myindex].innerHTML.replace(/[^0-9]/ig,"");
            phonefare[myindex].className="seleted";
            deposit.value=depositprice + "元";
            conve_drop.style.display= "none" ;
            depositsale.innerHTML= depositprice*0.98 + "-" + depositprice*0.995;
        }
    }

//流量
    var flowarea=document.getElementById('flowarea');
    var phonearea=document.getElementById('flowarea').getElementsByTagName("li");
    var flowareainput=document.getElementById('flowareainput');
    var flowareabox=document.getElementById('flowareabox');
    flowareabox.onclick=function () {
        if (flowarea.style.display ==="none") {
            flowarea.style.display="block";
        }
        else{
            flowarea.style.display="none";
        }
    };
    for(i=0;i<phonearea.length;i++) {
        phonearea[i].onclick = function () {
            for (j = 0; j < phonearea.length; j++) {
                phonearea[j].className = phonearea[j].className.replace("seleted", "");
            }
            var areaindex = parseInt(this.getAttribute('index'));
            phonearea[areaindex].className = "seleted";
            flowareainput.value = phonearea[areaindex].innerHTML;
            flowarea.style.display = "none";
            //depositsale.innerHTML= depositprice*0.98 + "-" + depositprice*0.995;
        }
    }
        var phonequantity=document.getElementById('flowquantity').getElementsByTagName("li");
        var flowquantity=document.getElementById('flowquantity');
        var flowquantitybox=document.getElementById('flowquantitybox');
        var flowquantityinput=document.getElementById('flowquantityinput');
        var flowsale=document.getElementById('flowsale');
    flowquantitybox.onclick=function () {
            if (flowquantity.style.display ==="none") {
                flowquantity.style.display="block";
            }
            else{
                flowquantity.style.display="none";
            }
        };
        for(i=0;i<phonequantity.length;i++){
            phonequantity[i].onclick=function () {
                for (j = 0; j < phonequantity.length; j++) {
                    phonequantity[j].className = phonequantity[j].className.replace("seleted", "");
                }
                var quantityindex= parseInt(this.getAttribute('index'));
                phonequantity[quantityindex].className = "seleted";
                flowquantityinput.value = phonequantity[quantityindex].innerHTML ;
                flowquantity.style.display= "none" ;
                flowsale.innerHTML= parseInt(phonequantity[quantityindex].innerHTML)*0.095;
            }
        }
//详情提示信息
    var flowdetail=document.getElementById("flowdetail");
    var flowcontain=document.getElementById("flowcontain");
    flowdetail.onmouseover=function () {
        flowcontain.style.display="block"
    };
    flowdetail.onmouseout=function () {
        flowcontain.style.display="none";
    };
//固定电话
    var telefareinput=document.getElementById('telefareinput');
    var telefareli=document.getElementById('telefaredrop').getElementsByTagName("li");
    var teleprice=document.getElementById('teleprice');
    var teledeposit=document.getElementById('teledeposit');
    var telefaredrop=document.getElementById('telefaredrop');
    var telefarespan=document.getElementById('telefarespan');
    telefareinput.onclick=function () {
        if (telefaredrop.style.display ==="none") {
            telefaredrop.style.display="block";
            telefarespan.style.backgroundPosition="-1px -20px";
            telefarespan.style.transform= "rotate(180deg)";
        }
        else{
            telefarespan.style.backgroundPosition="-4px -21px";
            telefaredrop.style.display="none";
            telefarespan.style.transform= "rotate(0deg)";
        }
    };
    for(i=0;i<telefareli.length;i++){

        telefareli[i].onclick=function () {

            for (j=0;j<telefareli.length;j++) {
                telefareli[j].className = telefareli[j].className.replace("seleted", "");
            }
            var teleindex= parseInt(this.getAttribute('index'));
            var depositprice=telefareli[teleindex].innerHTML.replace(/[^0-9]/ig,"");
            telefareli[teleindex].className="seleted";
            teledeposit.value=depositprice + "元";
            telefaredrop.style.display= "none" ;
            telefarespan.style.backgroundPosition="-4px -21px";
            telefarespan.style.transform= "rotate(0deg)";
            teleprice.innerHTML= depositprice*0.99 + "-" + depositprice;
        }
    }
//固定电话
    var bbdiv=document.getElementById('bbdiv');
    var bbdropli=document.getElementById('bbdrop').getElementsByTagName("li");
    var bbprice=document.getElementById('bbprice');
    var bbdeposit=document.getElementById('bbdeposit');
    var bbdrop=document.getElementById('bbdrop');
    var bbspan=document.getElementById('bbspan');
    bbdiv.onclick=function () {
        if (bbdrop.style.display ==="none") {
            bbdrop.style.display="block";
            bbspan.style.backgroundPosition="-1px -20px";
            bbspan.style.transform= "rotate(180deg)";
        }
        else{
            bbspan.style.backgroundPosition="-4px -21px";
            bbdrop.style.display="none";
            bbspan.style.transform= "rotate(0deg)";
        }
    };
    for(i=0;i<bbdropli.length;i++){

        bbdropli[i].onclick=function () {

            for (j=0;j<bbdropli.length;j++) {
                bbdropli[j].className = bbdropli[j].className.replace("seleted", "");
            }
            var bbindex= parseInt(this.getAttribute('index'));
            var depositprice=bbdropli[bbindex].innerHTML.replace(/[^0-9]/ig,"");
            bbdropli[bbindex].className="seleted";
            bbdeposit.value=depositprice + "元";
            bbdrop.style.display= "none" ;
            bbspan.style.backgroundPosition="-4px -21px";
            bbspan.style.transform= "rotate(0deg)";
            bbprice.innerHTML= depositprice*0.95 + "-" + depositprice;
        }
    }
//quest
    var bbquest=document.getElementById("bbquest");
    var bbquestcontain=document.getElementById("bbquestcontain");
    bbquest.onmouseover=function () {
        bbquestcontain.style.display="block"
    };
    bbquest.onmouseout=function () {
        bbquestcontain.style.display = "none";
    };
//旅行
    var radio1=document.getElementsByName('radio1');
    var trip_inputhomedate=document.getElementById("trip_inputhomedate");
    var trip_em=document.getElementById('trip_em');
        radio1[0].onclick=function(){
            trip_inputhomedate.style.display="none";
            trip_em.style.backgroundPosition='unset';
        };
        radio1[1].onclick=function(){
            trip_em.style.backgroundPosition="0 -71px" ;
            trip_inputhomedate.style.display="block";
    };
//旅行动画
    var trip_nava=document.getElementById('trip_nava').getElementsByTagName('a');
    var trip_contianerbox=document.getElementById('trip_contianerbox');
    for(i=0;i<trip_nava.length;i++){
        trip_nava[i].onmouseover=function() {
            var aindex1 = parseInt(this.getAttribute('index'));
            for (j = 0; j < trip_nava.length; j++) {
                trip_nava[j].className = trip_nava[j].className.replace("active", "");
            }
            trip_nava[aindex1 - 1].className = "active";
            trip_contianerbox.style.left=parseInt(10 - (aindex1 - 1) * 290)+"px";
        }
    }
//关闭旅行窗口
    var trip_close=document.getElementById('trip_close');
    var trip_contianer=document.getElementById('trip_contianer');
    trip_close.onclick=function() {
        trip_contianer.style.display = "none";
        clc[1].className = clc[1].className.replace(" selected", "");
    };
//关闭车险窗口
    var car_close=document.getElementById('car_close');
    var car_contianer=document.getElementById('car_contianer');
    car_close.onclick=function() {
        car_contianer.style.display = "none";
        clc[2].className = clc[2].className.replace(" selected", "");
    };

//滚轮事件
    var tb_floatsh=document.getElementById('tb_floatsh');
    var tb_floatnav=document.getElementById('tb_floatnav');
    var nav=document.getElementById('tb_floatnav').getElementsByTagName('a');
    var navtop=tb_floatnav.offsetTop;
    var floatnav=document.getElementsByName('floatnav');
//下拉刷新数据
    var dataInt={"data":[
        {"src":'tb_cnxh1.jpg',"text":'酷睿i7-7700/GTX1060独显绝地求生吃鸡游戏台式电脑主机全套',"price":'3599',"sold":'5'},
        {"src":'tb_cnxh3.jpg',"text":'佐丹奴短袖T恤 4件装 男纯棉T-shirt 男圆领纯色体恤衫 01247003',"price":'199.9',"sold":'649'},
        {"src":'tb_cnxh2.jpg',"text":'鑫炬火NFD10迷你电脑赛扬1037U/I3 3217U/I5 3317U工控6COM整机',"price":'790',"sold":'0'},
        {"src":'tb_cnxh4.jpg',"text":'舜威 点烟器一拖三多功能用插头带USB汽车一',"price":'28',"sold":'7226'},
        {"src":'tb_cnxh5.jpg',"text":'i78700k1070独显游戏DIY台式电脑主机组装机',"price":'6699',"sold":'128'}
        ]};
    window.onscroll=function () {

        var top=document.documentElement.scrollTop;
        var floatnav5=document.getElementById('floatnav5');
        var tb_cnxhcom=document.getElementsByClassName('tb_cnxhcom');
        var last_cnxhcomtop=tb_cnxhcom[tb_cnxhcom.length-1].offsetTop;
        var cnxhcom_height=tb_cnxhcom[0].offsetHeight;
        var height=document.documentElement.clientHeight;
        if ((top+height)>(last_cnxhcomtop+cnxhcom_height+200)){
            if(top<10000)
            for(var i=0;i<dataInt.data.length;i++){
                var box=document.createElement('div');
                box.className='tb_rmdpcom tb_cnxhcom left';
                var tb_cnxhcoma=document.createElement('a');
                tb_cnxhcoma.className='tb_cnxhcoma';
                var pic=document.createElement('img');
                pic.src="icon/"+dataInt.data[i].src;
                var titlea=document.createElement('a');
                titlea.className="title";
                titlea.innerText=dataInt.data[i].text;
                var tb_cnxhprice=document.createElement('div');
                tb_cnxhprice.className='tb_rmdpprice tb_cnxhprice left';
                var tb_cnxhpricea=document.createElement('a');
                var tb_cnxhpriceaspan=document.createElement('span');
                tb_cnxhpriceaspan.innerHTML='¥';
                var tb_cnxhpriceaem=document.createElement('em');
                tb_cnxhpriceaem.innerHTML=dataInt.data[i].price;
                var tb_rmdpyx=document.createElement('a');
                tb_rmdpyx.className='tb_rmdpyx';
                tb_rmdpyx.innerHTML="销量：";
                var tb_rmdpyxem=document.createElement('em');
                tb_rmdpyxem.innerHTML=dataInt.data[i].sold;
                var tb_cnxhfind=document.createElement('div');
                tb_cnxhfind.className="tb_cnxhfind";
                var tb_cnxhfindp1=document.createElement("p");
                tb_cnxhfindp1.innerHTML="找相似";
                var tb_cnxhfindp2=document.createElement("p");
                tb_cnxhfindp2.innerHTML="发现更多相似的宝贝>";
                floatnav5.appendChild(box);
                  box.appendChild(tb_cnxhcoma);
                    tb_cnxhcoma.appendChild(pic);
                  box.appendChild(titlea);
                  box.appendChild(tb_cnxhprice);
                    tb_cnxhprice.appendChild(tb_cnxhpricea);
                      tb_cnxhpricea.appendChild(tb_cnxhpriceaspan);
                      tb_cnxhpricea.appendChild(tb_cnxhpriceaem);
                    tb_cnxhprice.appendChild(tb_rmdpyx);
                      tb_rmdpyx.appendChild(tb_rmdpyxem);
                  box.appendChild(tb_cnxhfind);
                    tb_cnxhfind.appendChild(tb_cnxhfindp1);
                    tb_cnxhfind.appendChild(tb_cnxhfindp2);
            }
        }
        if(top>=150){
            tb_floatsh.style.display='block';
        }else{
            tb_floatsh.style.display='none';
        }
        tb_floatnav.style.top=navtop-top+"px";
        if(navtop-top<=60){
            tb_floatnav.style.top="60px"
        }
        if(top>=document.documentElement.clientHeight){
            retop.style.display='block';
        }else{
            retop.style.display='none';
        }

        for(i=0;i<nav.length;i++){
            nav[i].className=nav[i].className.replace("active"," ");
        }
        if (top<950){
            nav[0].className+="active";
        }else if(top<=1600){
            nav[1].className+="active";
        }else if(top<=2400){
            nav[2].className+="active";
        }else if(top<=3200){
            nav[3].className+="active";
        }else {
            nav[4].className += "active";
        }
    };
    //定位导航
    var aghh=document.getElementById("aghh");
    var hdzb=document.getElementById("hdzb");
    var pzts=document.getElementById("pzts");
    var shrm=document.getElementById("shrm");
    var cnxh=document.getElementById("cnxh");
    var retop=document.getElementById('retop');
    function mTo(y) {
        /*y:目标纵坐标,duration:时间(毫秒)*/
        var scrollTop = document.documentElement.scrollTop;/*页面当前滚动距离*/
        var distance = y - scrollTop;/*结果大于0,说明目标在下方,小于0,说明目标在上方*/
        var scrollCount = 200 / 10;/*10毫秒滚动一次,计算滚动次数*/
        var everyDistance = distance / scrollCount;/*滚动距离除以滚动次数计算每次滚动距离*/
        for (var index = 1; index <= scrollCount; index++) /*循环设置scrollBy事件,在duration之内,完成滚动效果*/
            setTimeout(function () { window.scrollBy(0, everyDistance) }, 10 * index);
    }
    aghh.onclick=function () {
        if(top!==950){
            mTo(950);
        }
    };
    hdzb.onclick=function () {
        if(top!==1600){
            mTo(1600);
        }
    };
    pzts.onclick=function () {
        if(top!==2400){
            mTo(2400);
        }
    };
    shrm.onclick=function () {
        if(top!==3200){
            mTo(3200);
        }
    };
    cnxh.onclick=function () {
        if(top!==4260){
            mTo(4260);
        }
    };
    retop.onclick=function () {
        var scrollTop = document.documentElement.scrollTop;
        var distance = 0 - scrollTop;
        var scrollCount = 300 / 10;
        var everyDistance = distance / scrollCount;
        for (var index = 1; index <= scrollCount; index++)
            setTimeout(function () { window.scrollBy(0, everyDistance) }, 10 * index);
    };
//}









