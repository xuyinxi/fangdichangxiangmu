var num=10;
        var oBody=document.documentElement||document.body;
        var wW=window.innerWidth;
        var wH=window.innerHeight;
        var timer=null;
        init(num);
        function init(num){
            for(var i=0;i<num;i++){
                var randomL=Math.random()*2;
                    randomL=Math.min(wW-160,randomL);
                var balloon = document.createElement('div');
                balloon.className="balloon";
                balloon.style.left=randomL+'px';
                balloon.style.top=wH+"px";
                balloon.speed=Math.random()*3+1;
                oBody.appendChild(balloon);
            }
        }
        timer=setInterval(function(){
            var oBall=document.querySelectorAll(".balloon");
            for(var i=0,len=oBall.length;i<len;i++){
                oBall[i].style.top=oBall[i].offsetTop-oBall[i].speed+"px";
                oBall[i].onclick=function(){
                    crash(this,function(xxx){
                        clearInterval(xxx.timer);
                        xxx.parentNode.removeChild(xxx);
                    });
                    init(1);
                }
            }
        },30);
        function crash(ele,cb){
            ele.timeouter=setTimeout(function(){
                cb&&cb(ele);
            },500);
            ele.timer=setInterval(function(){
                ele.speed++;
                ele.style.top=ele.offsetTop-ele.speed+"px";
                ele.style.width=ele.offsetWidth-10+"px";
                ele.style.height=ele.offsetHeight-10+"px";
            },30);
        }