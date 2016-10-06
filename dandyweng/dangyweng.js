/**
 * Created by Fate on 2016/9/30.
 */
/*
var textAttr = {
    "fill": "#000",
    "font-size": "12px",
    "cursor": "pointer"
};


for (var state in china) {
    china[state]['path'].color = Raphael.getColor(0.9);

    (function (st, state) {

        //获取当前图形的中心坐标
        var xx = st.getBBox().x + (st.getBBox().width / 2);
        var yy = st.getBBox().y + (st.getBBox().height / 2);

        //***修改部分地图文字偏移坐标
        switch (china[state]['name']) {
            case "江苏":
                xx += 5;
                yy -= 10;
                break;
            case "河北":
                xx -= 10;
                yy += 20;
                break;
            case "天津":
                xx += 10;
                yy += 10;
                break;
            case "上海":
                xx += 10;
                break;
            case "广东":
                yy -= 10;
                break;
            case "澳门":
                yy += 10;
                break;
            case "香港":
                xx += 20;
                yy += 5;
                break;
            case "甘肃":
                xx -= 40;
                yy -= 30;
                break;
            case "陕西":
                xx += 5;
                yy += 10;
                break;
            case "内蒙古":
                xx -= 15;
                yy += 65;
                break;
            default:
        }
        //写入文字
        china[state]['text'] = R.text(xx, yy, china[state]['name']).attr(textAttr);

        st[0].onmouseover = function () {
            st.animate({fill: "rgb(177,177,177)", stroke: "#eee"}, 500);
            china[state]['text'].toFront();
            R.safari();
        };
        st[0].onmouseout = function () {
            st.animate({fill: "rgb(230,230,230)", stroke: "#eee"}, 500);
            china[state]['text'].toFront();
            R.safari();
        };

    })(china[state]['path'], state);
}
}    */



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
    };
    document.getElementById("svg21").onmouseleave = function()
    {
        oTop.style.opacity = 0;
    };
    document.getElementById("svg22").onmouseenter = function()
    {
        oTop.innerHTML = "海南";
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
    document.getElementById("svg24").onmouseenter = function()
    {
        oTop.innerHTML = "四川24";
    };
    document.getElementById("svg25").onmouseenter = function()
    {
        oTop.innerHTML = "四川25";
    };
    document.getElementById("svg26").onmouseenter = function()
    {
        oTop.innerHTML = "四川26";
    };
    document.getElementById("svg27").onmouseenter = function()
    {
        oTop.innerHTML = "四川27";
    };
    document.getElementById("svg28").onmouseenter = function()
    {
        oTop.innerHTML = "四川28";
    };
    document.getElementById("svg29").onmouseenter = function()
    {
        oTop.innerHTML = "四川29";
    };
    document.getElementById("svg30").onmouseenter = function()
    {
        oTop.innerHTML = "四川30";
    };
    document.getElementById("svg31").onmouseenter = function()
    {
        oTop.innerHTML = "四川31";
    };
    document.getElementById("svg32").onmouseenter = function()
    {
        oTop.innerHTML = "沙发沙发";
    };

}
var set= 0;

window.onscroll = function()
{
    var timeline = document.getElementById( "cd-timeline" );
    var home2 = document.getElementById( "heading" );
    var home3 = document.getElementById( "home-p" );
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var i= 0;
    var j = 0;
    function showCon()
    {
        home2.style.top = 820 - i*5 + "px";
        home3.style.top = 960 - i*5 + "px" ;
        console.log(i);
        i++;
    }
 function outCon()
    {
        home2.style.top = 120 + j*5 +"px";
        home3.style.top = 260 + j*5 +"px" ;
         console.log(j);
        j++;
    }
    if( t >= 500 && t<=1500 && set==0 )
    {
        set=1;
        timeline.style.opacity = 1;
        home2.style.opacity = 1;
        home3.style.opacity = 1;
        var intervalId = setInterval(showCon(), 5);
        if(i==140)
        {
            clearInterval(intervalId);
        }
    }

   else if( t<=550 ||t>=1500 )
    {
        timeline.style.opacity=0;
        if(t>=1500)
        {
            intervalId = setInterval(outCon(), 5);
        }

        if(i==140)
        {
            clearInterval(intervalId);
            set=0;
        }
    }
    else{

    }
   // console.log(t);
    if( t >= 2450 && t<=3100 )
    {

    }
    if(t >= 500 && t<=1500)
    {
         timeline.style.opacity = 1;
     }
}