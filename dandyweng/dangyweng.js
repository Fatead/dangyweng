

window.onload = function(){
    var oTop = document.getElementById("to_top");
    var div = document.getElementById("travel-section2");
    document.onmousemove = function(evt){
        var oEvent = evt || window.event;
        var scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.left = oEvent.clientX + scrollleft + 10 +"px";
        oTop.style.top = oEvent.clientY + scrolltop + 10 + "px";
    }
    var s1 =document.getElementById("svg1")
    document.getElementById("svg1").onmouseenter = function()
    {
        oTop.innerHTML = "西藏";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg1").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg2").onmouseenter = function()
    {
        oTop.innerHTML = "贵州";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg3").onmouseenter = function()
    {
        oTop.innerHTML = "福建";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg4").onmouseenter = function()
    {
        oTop.innerHTML = "四川";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg5").onmouseenter = function()
    {
        oTop.innerHTML = "上海";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg6").onmouseenter = function()
    {
        oTop.innerHTML = "江苏";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg6").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg7").onmouseenter = function()
    {
        oTop.innerHTML = "浙江";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg7").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg8").onmouseenter = function()
    {
        oTop.innerHTML = "山西";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg9").onmouseenter = function()
    {
        oTop.innerHTML = "内蒙古";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg9").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg10").onmouseenter = function()
    {
        oTop.innerHTML = "天津";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg11").onmouseenter = function()
    {
        oTop.innerHTML = "河北";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg12").onmouseenter = function()
    {
        oTop.innerHTML = "北京";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg13").onmouseenter = function()
    {
        oTop.innerHTML = "安徽";
        oTop.style.opacity = 1;
    };document.getElementById("svg14").onmouseenter = function()
    {
        oTop.innerHTML = "云南";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg14").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg15").onmouseenter = function()
    {
        oTop.innerHTML = "江西";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg16").onmouseenter = function()
    {
        oTop.innerHTML = "山东";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg16").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg17").onmouseenter = function()
    {
        oTop.innerHTML = "河南";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg18").onmouseenter = function()
    {
        oTop.innerHTML = "湖南";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg19").onmouseenter = function()
    {
        oTop.innerHTML = "湖北";
        oTop.style.opacity = 1;
    };document.getElementById("svg20").onmouseenter = function()
    {
        oTop.innerHTML = "广西";
        oTop.style.opacity = 1;

    };
    document.getElementById("svg20").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg21").onmouseenter = function()
    {
        oTop.innerHTML = "广东";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg21").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg22").onmouseenter = function()
    {
        oTop.innerHTML = "海南";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg23").onmouseenter = function()
    {
        oTop.innerHTML = "新疆";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg23").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg22").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg24").onmouseenter = function()
    {
        oTop.innerHTML = "宁夏";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg25").onmouseenter = function()
    {
        oTop.innerHTML = "青海";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg26").onmouseenter = function()
    {
        oTop.innerHTML = "甘肃";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg27").onmouseenter = function()
    {
        oTop.innerHTML = "陕西";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg28").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg28").onmouseenter = function()
    {
        oTop.innerHTML = "黑龙江";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg29").onmouseenter = function()
    {
        oTop.innerHTML = "吉林";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg29").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg30").onmouseenter = function()
    {
        oTop.innerHTML = "辽宁";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg30").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg31").onmouseenter = function()
    {
        oTop.innerHTML = "台湾";
        oTop.style.opacity = 1;
    };
    document.getElementById("svg31").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
};

var set= 0;
var set2= 0;
var set3 = 0;
var i= 0;
var j = 0;
var m = 0;
var n = 0;
var r = 0;
var e = 0;
var home2 = document.getElementById( "heading" );
var home3 = document.getElementById( "home-p" );
var sign;


function outCon()
{
    var intervalId2 = null;
    var home2 = document.getElementById( "heading" );
    var home3 = document.getElementById( "home-p" );
    intervalId2 = setInterval(function () {
        home2.style.top = 120 + j*5 +"px";
        home3.style.top = 260 + j*5 +"px" ;
        if(j<170)
        {
            j++;
        }

        else
        {
            set=0;
            clearInterval(intervalId2);
            i=0;
        }
    }, 5);
}

function showCon() {
    var timeline = document.getElementById("cd-timeline");
    var home2 = document.getElementById("heading");
    var home3 = document.getElementById("home-p");
    var intervalId = null;
    intervalId = setInterval(function () {
        home2.style.top = 970 - i * 5 + "px";
        home3.style.top = 1110 - i * 5 + "px";
        if (i < 170) {
            i++;
        }
        else {
            set = 1;
            clearInterval(intervalId);
            j=0;
        }
    }, 5);
    timeline.style.opacity = 1;
    home2.style.opacity = 1;
    home3.style.opacity = 1;
}

function showTravel() {
    var travel1 = document.getElementById("travel-section1");
    var travel2 = document.getElementById("travel-section2");
    travel2.style.display = "block";
    var intervalId3 = null;
    intervalId3 = setInterval(function () {
        travel1.style.left = -850 + m * 5 + "px";
        travel2.style.left = 1780 - m * 6 + "px";
        if ( m < 170) {
            m++;
        }
        else {
            set2 = 1;
            clearInterval(intervalId3);
            n=0;
        }
    }, 5);
}

function outTravel() {
    var travel1 = document.getElementById("travel-section1");
    var travel2 = document.getElementById("travel-section2");
    var intervalId4 = null;
    travel2.style.display = "none";
    intervalId4 = setInterval(function () {
        travel1.style.left = 0 - n * 5 + "px";
        travel2.style.left = 760 + n * 6 + "px";
        if ( n < 170) {
            n++;
        }
        else {
            set2 = 0;
            clearInterval(intervalId4);
            m=0;
        }
    }, 5);
}

function showDesign() {
    var design1 = document.getElementById("design-section1");
    var design2 = document.getElementById("design-section2");
    design1.style.display = "block";
    design2.style.display = "block";
    var intervalId5 = null;
    intervalId5 = setInterval(function () {
        design1.style.left = -850 + r * 5 + "px";
        design2.style.left = 1780 - r * 6 + "px";
        if ( r < 170) {
            r++;
        }
        else {
            set3 = 1;
            clearInterval(intervalId5);
            e=0;
        }
    }, 5);
}

function outDesign() {
    var design1 = document.getElementById("design-section1");
    var design2 = document.getElementById("design-section2");
    design1.style.display = "none";
    design2.style.display = "none";
    var intervalId4 = null;
    intervalId4 = setInterval(function () {
        design1.style.left = 0 - e * 5 + "px";
        design2.style.left = 760 + e * 6 + "px";
        if ( e < 170) {
            e++;
        }
        else
        {
            set3 = 0;
            clearInterval(intervalId4);
            r=0;
        }
    }, 5);
}

function showGif()
{
    var photo = document.getElementsByClassName("photo-section5");
    for(var f=0,len=photo.length;f<len;f++)
    {
        photo[f].style.opacity = 1;
        photo[f].style.width = 180 + "px";
    }

}
function outGif()
{
    var photo = document.getElementsByClassName("photo-section5");
    for(var f=0,len=photo.length;f<len;f++)
    {
        photo[f].style.opacity = 0;
        photo[f].style.width = 20 + "px";
    }

}

var time=766;
var timer = null;


window.onscroll = function()
{
    var timeline = document.getElementById( "cd-timeline" );
    var t = document.documentElement.scrollTop || document.body.scrollTop;

    if( t >= 500 && t<=1500 && set==0 )
    {
        timeline.style.opacity = 1;
        showCon();

    }
       else if( (t<550&&set==1) || (t>1500&&set==1) )
    {
        timeline.style.opacity=0;
        outCon();
    }
     else if( t >= 1500 && t<=2600 && set2==0)
    {
        showTravel();
    }
    else if( t < 1500 || t>2600 && set2==1)
    {
        outTravel();
    }
    else if( t >= 2400 && t<=3500)
    {
        showGif();
    }
    else if( t < 2400 || t>3500)
    {
        outGif();
    }
    else if( t > 3300 && t< 4600 && set3==0 )
    {
        showDesign();
    }
    else if( (t < 2400 || t>3500) && set3==1)
    {
        outDesign();
    }
};


function begin()
{
    timer = setInterval(function(){
        progress();
    },60)
}
function progress(){
    var oDiv = document.getElementById("visit");
    if(oDiv.innerHTML != "总访问量：611766") {
        time = time +1000;
        oDiv.innerHTML = "总访问量：" + time;
    }
    if(oDiv.innerHTML == "总访问量：611766"){
        clearInterval(timer);
    }
}

function showPhoto()
{
    document.getElementById("photo-section").style.display = "block";
    document.getElementById("left").style.display = "block";
    document.getElementById("right").style.display = "block";
}
var f = 1;
function leftMove()
{
    document.getElementById("photo-section").style.left = -1800*(f -1) + "px";
    if(f>1) {
        f--;
    }
}
function rightMove()
{
    document.getElementById("photo-section").style.left = -1800*f + "px";
    if(f<13) {
        f++;
    }
}

function cancelMove()
{
    document.getElementById("photo-section").style.display = "none";

}

document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
function subSomething()
{
    if(document.readyState == "complete") //当页面加载状态
    {
        document.getElementById("spinner").style.opacity = 0;
    }
}