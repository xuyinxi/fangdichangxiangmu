function getTotalTop (elem) {
    var sum=0;
    do{
      sum+=elem.offsetTop;
      elem=elem.offsetParent;
    }while(elem);
    return sum;
}

var as=document.querySelectorAll("#color_ff4400>ul>li");
for(let i=0;i<as.length;i++){
    as[i].onclick=()=>{
        var fi=document.querySelector(".f"+(i+1));
        var totalTop=getTotalTop(fi);
        window.scrollTo(0,totalTop-100);
    }
}
