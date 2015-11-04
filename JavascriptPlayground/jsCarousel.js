var w = document.body.clientWidth;
var carImg = document.getElementsByClassName("carImg");
var carButtons = document.getElementsByClassName("js-carousel-buttons");
var jsCarDiv = document.getElementById("js-carousel-div")
var px = "px";

resizeCarousel();

function resizeCarousel()
{
   document.getElementById("js-outer-carousel-div").style.display = "block";
   w = document.body.clientWidth ;
   var desiredWidth = (w * .6).toString();
   jsCarDiv.style.height = (w * .337).toString() + px;
   carButtons[0].style.width = desiredWidth + px;
   carButtons[1].style.width = desiredWidth + px;
   carButtons[0].style.height = (w * .337).toString() + px;
   carButtons[1].style.height = (w * .337).toString() + px;
   carButtons[0].style.right = (w * .8).toString() + px;
   carButtons[1].style.left = (w * .8).toString() + px;
   for (var x = 0; x < 5; x++) {
      carImg[x].style.width = desiredWidth + px;
   }
   for (var x = 0; x < 5; x++) {
      carImg[x].style.height = (w * .337).toString() + px;
   }
   carImg[0].style.right = (w * 1.4).toString() + px;
   carImg[1].style.right = (w * .8).toString() + px;
   carImg[2].style.left = (w * .2).toString() + px
   carImg[3].style.left = (w * .8).toString() + px;
   carImg[4].style.left = (w * 1.4).toString() + px;

}

var carSliderNum = 0;

function carSwitch(clicked_id)
{
   carButtons[0].removeAttribute("onclick");
   carButtons[1].removeAttribute("onclick");
      if(clicked_id == "0")
      {
         if(carSliderNum == 4)
         {
            carSliderNum = 0;
         }
         else {
            carSliderNum++;
         }
      }
      if(clicked_id == "1")
      {
         if(carSliderNum == 0)
         {
            carSliderNum = 4;
         }
         else {
            carSliderNum--;
         }
      }
      switch(carSliderNum)
      {
         case 0:
         if(clicked_id == "0")
         {
            carImg[0].style.zIndex = "0";
         }
         else {
            carImg[4].style.zIndex = "0";
         }
         carImg[0].style.transform = "translateX(0%)" ;
         carImg[1].style.transform = "translateX(0%)" ;
         carImg[2].style.transform = "translateX(0%)" ;
         carImg[3].style.transform = "translateX(0%)" ;
         carImg[4].style.transform = "translateX(0%)";
         setTimeout(function () {
            carImg[0].style.zIndex = "1";
            carImg[4].style.zIndex = "1";
            carButtons[0].setAttribute("onclick", "carSwitch(this.id)");
            carButtons[1].setAttribute("onclick", "carSwitch(this.id)");
         }, 1000);
         break;
         case 1:
         if(clicked_id == "0")
         {
            carImg[4].style.zIndex = "0";
         }
         else {
            carImg[3].style.zIndex = "0";
         }
         carImg[0].style.transform = "translateX(100%)" ;
         carImg[1].style.transform = "translateX(100%)" ;
         carImg[2].style.transform = "translateX(100%)" ;
         carImg[3].style.transform = "translateX(100%)" ;
         carImg[4].style.transform = "translateX(-400%)";
         setTimeout(function () {
            carImg[4].style.zIndex = "1";
            carImg[3].style.zIndex = "1";
            carButtons[0].setAttribute("onclick", "carSwitch(this.id)");
            carButtons[1].setAttribute("onclick", "carSwitch(this.id)");
         }, 1000);
         break;
         case 2:
         if(clicked_id == "0")
         {
            carImg[3].style.zIndex = "0";
         }
         else {
            carImg[2].style.zIndex = "0";
         }
         carImg[0].style.transform = "translateX(200%)" ;
         carImg[1].style.transform = "translateX(200%)" ;
         carImg[2].style.transform = "translateX(200%)" ;
         carImg[3].style.transform = "translateX(-300%)" ;
         carImg[4].style.transform = "translateX(-300%)";
         setTimeout(function () {
            carImg[3].style.zIndex = "1";
            carImg[2].style.zIndex = "1";
            carButtons[0].setAttribute("onclick", "carSwitch(this.id)");
            carButtons[1].setAttribute("onclick", "carSwitch(this.id)");
         }, 1000);
         break;
         case 3:
         if(clicked_id == "0")
         {
            carImg[2].style.zIndex = "0";
         }
         else {
            carImg[1].style.zIndex = "0";
         }
         carImg[0].style.transform = "translateX(300%)" ;
         carImg[1].style.transform = "translateX(300%)" ;
         carImg[2].style.transform = "translateX(-200%)" ;
         carImg[3].style.transform = "translateX(-200%)" ;
         carImg[4].style.transform = "translateX(-200%)";
         setTimeout(function () {
            carButtons[0].setAttribute("onclick", "carSwitch(this.id)");
            carButtons[1].setAttribute("onclick", "carSwitch(this.id)");
            carImg[2].style.zIndex = "1";
            carImg[1].style.zIndex = "1";
         }, 1000);
         break;
         case 4:
         if(clicked_id == "0")
         {
            carImg[1].style.zIndex = "0";
         }
         else {
            carImg[0].style.zIndex = "0";
         }
         carImg[0].style.transform = "translateX(400%)" ;
         carImg[1].style.transform = "translateX(-100%)" ;
         carImg[2].style.transform = "translateX(-100%)" ;
         carImg[3].style.transform = "translateX(-100%)" ;
         carImg[4].style.transform = "translateX(-100%)";
         setTimeout(function () {
            carButtons[0].setAttribute("onclick", "carSwitch(this.id)");
            carButtons[1].setAttribute("onclick", "carSwitch(this.id)");
            carImg[1].style.zIndex = "1";
            carImg[0].style.zIndex = "1";
         }, 1000);
         break;
         default:
         break;
      }
}
