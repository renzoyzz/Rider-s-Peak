var w = document.body.clientWidth;
var px = "px";
var topBar = document.getElementById('all-top-bars');
topBar.style.display = "block";
bodyResize();

function bodyResize()
{
   w = document.body.clientWidth;
   if (w < 581)
   {
      document.getElementById("top-bar").style.display = "none";
      document.getElementById("navDropDownButton").style.display = "block";
   }
   else
   {
      document.getElementById("top-bar").style.display = "block";
      document.getElementById("navDropDownButton").style.display = "none";
   }
   if (w < 992) {
      document.getElementById("brand-bar").style.textAlign = "center";
   }
   else {
      document.getElementById("brand-bar").style.textAlign = "left";
   }
   if (w < 660)
   {
      var lineBreak = document.getElementsByClassName('review-block');
      for(var x = 0; x < lineBreak.length; x++)
      {
         lineBreak[x].style.width = "49%";
      }
      document.getElementsByClassName('filters')[0].style.width = "100%";
      var filterButtons = document.getElementsByClassName('filter-button');
      for (var x = 0; x < filterButtons.length; x++)
      {
         filterButtons[x].style.width = "20%";
         filterButtons[x].style.display = "inline-block";
         filterButtons[x].style.cssFloat = "left";
      }
      document.getElementsByClassName('normal-reviews')[0].style.width = "100%";
      document.getElementsByClassName('filters')[0].style.display = "block";

   }
   else if(w < 1120)
   {
      var lineBreak = document.getElementsByClassName('review-block');
      for(var x = 0; x < lineBreak.length; x++)
      {
         lineBreak[x].style.width = "24%";
      }
      document.getElementsByClassName('normal-reviews')[0].style.width = "100%";
      document.getElementsByClassName('filters')[0].style.display = "block";
      document.getElementsByClassName('filters')[0].style.width = "100%";
      var filterButtons = document.getElementsByClassName('filter-button');
      for (var x = 0; x < filterButtons.length; x++)
      {
         filterButtons[x].style.width = "20%";
         filterButtons[x].style.display = "inline-block";
         filterButtons[x].style.cssFloat = "left";
      }
   }
   else {
      var lineBreak = document.getElementsByClassName('add-line-break');
      for(var x = 0; x < lineBreak.length; x++)
      {
         lineBreak[x].style.disply = "inline-block";
      }
      document.getElementsByClassName('normal-reviews')[0].style.width = "80%";
      document.getElementsByClassName('filters')[0].style.display = "inline-block";
      document.getElementsByClassName('filters')[0].style.width = "19%";
      var filterButtons = document.getElementsByClassName('filter-button');
      for (var x = 0; x < filterButtons.length; x++)
      {
         filterButtons[x].style.width = "100%";
         filterButtons[x].style.display = "block";
         filterButtons[x].style.cssFloat = "none";
      }
   }
   reviewImgResize();
}

var dropDownContents = document.getElementsByClassName('nav-dropdown-items');
dropDownContents[0].style.display = "none";
var isNavDropped = false;

function navDropDown()
{
   if (!isNavDropped)
   {
      document.getElementById('navDropButton').setAttribute("class", "glyphicon glyphicon-chevron-up");
      dropDownContents[0].style.display = "block";
      isNavDropped = true;
   }
   else {
      document.getElementById('navDropButton').setAttribute("class", "glyphicon glyphicon-chevron-down");
      dropDownContents[0].style.display = "none";
      isNavDropped = false;
   }

}

function filterBrands(e) {
   console.log(e);
}

var brandsRevealed = false;

function revealBrands() {
   if(!brandsRevealed)
   {
      document.getElementsByClassName('filter-brands')[0].style.height = "125px";
      brandsRevealed = true;
   }
   else {
      document.getElementsByClassName('filter-brands')[0].style.height = "0px";
      brandsRevealed = false;
   }
}

function reviewImgResize () {
   var reviewPicture = document.getElementsByClassName('review-picture');
   for(var x = 0; x < reviewPicture.length; x++)
   {
      reviewPicture[x].style.height = w * .13;
   }
}
