var register_open = document.querySelector("#register_button");
var register_close = document.querySelector(".closebtn");

register_open.addEventListener("click",function(){
    document.body.classList.add("popup-active")
});

register_close.addEventListener("click",function(){
    document.body.classList.remove("popup-active")
});
// login
var register_open = document.querySelector(".login_btn");
var register_close = document.querySelector(".closebutton");

register_open.addEventListener("click",function(){
    document.body.classList.add("loginactive")
});

register_close.addEventListener("click",function(){
    document.body.classList.remove("loginactive")
});
