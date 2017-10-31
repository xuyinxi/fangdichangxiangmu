window.addEventListener("scroll",()=>{
    var header=document.querySelector(".logins");
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop>500){
        header.className="logins xianshiheader";
    }else{
        header.className="logins";
    }
});