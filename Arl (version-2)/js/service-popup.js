// ========= Image 1 popup =================
var serviceImage1_open = document.querySelector(".service_image1");
var serviceImage1_close = document.querySelector(".closebtn1");

serviceImage1_open.addEventListener("click", function () {
  document.body.classList.add("active");
});

serviceImage1_close.addEventListener("click",function(){
  document.body.classList.remove("active");
});
// ========= End Image 1 popup =================


// ========= Image 2 popup =================
var serviceImage2_open = document.querySelector(".service_image2");
var serviceImage2_close = document.querySelector(".closebtn2");

serviceImage2_open.addEventListener("click", function () {
  document.body.classList.add("active1");
});

serviceImage2_close.addEventListener("click",function(){
  document.body.classList.remove("active1");
});
// ========= End Image 2 popup =================


// ========= Image 3 popup =================
var serviceImage3_open = document.querySelector(".service_image3");
var serviceImage3_close = document.querySelector(".closebtn3");

serviceImage3_open.addEventListener("click", function () {
  document.body.classList.add("active2");
});

serviceImage3_close.addEventListener("click",function(){
  document.body.classList.remove("active2");
});
// ========= End Image 3 popup =================