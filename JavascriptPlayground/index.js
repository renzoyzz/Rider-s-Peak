var w = document.body.clientWidth;
var dropDownContents = document.getElementsByClassName('nav-dropdown-items');
dropDownContents[0].style.display = "none";
var px = "px";


bodyResize();
var topBar = document.getElementById('all-top-bars');
topBar.style.display = "block";

function bodyResize()
{
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
      resizeCarousel();
}

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

var allMenus = new menus();

function menus () {
   this.menuLevel = 0;
   this.menuUp = false;
   this.categoryChosen = "";
   this.brandChosen = "";
   this.productChosen = "";
   this.filterChosen = "";

   this.menu = function (e)
   {
      if(this.categoryChosen != "" && e != this.categoryChosen)
      {
         allMenus.menuChange(e);
      }
      else if (this.menuUp == false) {
         if(e == "Brands")
         {
            document.getElementById('category-banner').innerHTML = e;
            document.getElementById('brands-menu').style.height = "350px";
            document.getElementById('brands-menu').style.backgroundColor = "#E9B64D";
            this.categoryChosen = e;
            this.menuUp = true;
         }
         else if(e == "Men")
         {
            document.getElementById('category-banner').innerHTML = e;
            document.getElementById('brands-menu').style.height = "350px";
            document.getElementById('brands-menu').style.backgroundColor = "#90CA77";
            this.categoryChosen = e;
            this.menuUp = true;
         }
         else if(e == "Women")
         {
            document.getElementById('category-banner').innerHTML = e;
            document.getElementById('brands-menu').style.height = "350px";
            document.getElementById('brands-menu').style.backgroundColor = "#FF7588";
            this.categoryChosen = e;
            this.menuUp = true;
         }
         else if(e == "Kids")
         {
            document.getElementById('category-banner').innerHTML = e;
            document.getElementById('brands-menu').style.height = "350px";
            document.getElementById('brands-menu').style.backgroundColor = "#BEAFD8";
            this.categoryChosen = e;
            this.menuUp = true;
         }
      }
      else if(e != "" && e != this.categoryChosen) {
         this.collapseMenu ();
         this.menuUp = false;
         this.categoryChosen = e;
         allMenus.menu(this.categoryChosen);
      }
      else {
         this.collapseMenu ();
         this.menuUp = false;
      }
   },

   this.menuChange = function (e)
   {
         this.collapseMenu();
         this.menuUp = false;
         this.categoryChosen = e;
         setTimeout(function () {
            allMenus.menu(e);
            this.menuChanged = false;
            console.log();
            console.log(e);
         }, 500);
   },

   this.collapseMenu = function ()
   {

      var allMenus = document.getElementsByClassName('menu');
      for(var x = 0; x < allMenus.length; x++)
      {
            allMenus[x].style.height = "0px";
      }
      document.getElementById('brands-menu').style.height = "0px";
      this.brandChosen = "";
      this.productChosen = "";
      this.categoryChosen = "";
      this.filterChosen = "";
      this.menuLevel = 0;
   },

   this.brand = function (e) {
      if(e !== this.brandChosen)
      {
         this.collapseLevel2();
      }
      this.brandChosen = e;
      document.getElementsByClassName("menu")[0].style.height = "270px";
      this.menuLevel = 1;
   },

   this.product = function (e) {
      if(e !== this.productChosen)
      {
         this.collapseLevel2();
      }
      this.productChosen = e;
      setTimeout(function () {
         if(e == "Snowboard")
         {

            document.getElementsByClassName("level-2")[0].style.height = "270px";
         }
         else if (e == "Jackets") {
            document.getElementsByClassName("level-2")[1].style.height = "270px";
         }
         else if (e == "Pants") {
            document.getElementsByClassName("level-2")[2].style.height = "270px";
         }
         else if (e == "Boots") {
            document.getElementsByClassName("level-2")[3].style.height = "270px";
         }
         else if (e == "Bindings") {
            document.getElementsByClassName("level-2")[4].style.height = "270px";
         }
      }, 500);


      this.menuLevel = 2;
   },

   this.snowboards = function (e) {
      if (this.menuLevel == 3) {
         this.collapseLevel3();
         setTimeout(function () {
            if(e == "Size")
            {
               document.getElementsByClassName("level-3")[0].style.height = "270px";
               this.filterChosen = e;
            }
            else if (e == "Type")
            {
               document.getElementsByClassName("level-3")[1].style.height = "270px";
               this.filterChosen = e;
            }
            else if (e == "IsWide") {
               document.getElementsByClassName("level-3")[2].style.height = "270px";
               this.filterChosen = e;
            }
            this.menuLevel = 3;
         }, 500);
      }
      else {
         if(e == "Size")
         {
            document.getElementsByClassName("level-3")[0].style.height = "270px";
            this.filterChosen = e;
         }
         else if (e == "Type")
         {
            document.getElementsByClassName("level-3")[1].style.height = "270px";
            this.filterChosen = e;
         }
         else if (e == "IsWide") {
            document.getElementsByClassName("level-3")[2].style.height = "270px";
            this.filterChosen = e;
         }
         this.menuLevel = 3;
      }
   },

   this.jackets = function (e) {
      if (this.menuLevel == 3) {
         this.collapseLevel3();
         setTimeout(function () {
            if(e == "Size")
            {
               document.getElementsByClassName("level-3")[3].style.height = "270px";
            }
            else if (e == "Warmth")
            {
               document.getElementsByClassName("level-3")[4].style.height = "270px";
            }
            else if (e == "WaterProofing") {
               document.getElementsByClassName("level-3")[5].style.height = "270px";
            }
            this.menuLevel = 3;
         }, 500);
      }
      else {
         if(e == "Size")
         {
            document.getElementsByClassName("level-3")[3].style.height = "270px";
         }
         else if (e == "Warmth")
         {
            document.getElementsByClassName("level-3")[4].style.height = "270px";
         }
         else if (e == "WaterProofing") {
            document.getElementsByClassName("level-3")[5].style.height = "270px";
         }
         this.menuLevel = 3;
      }
   },

   this.pants = function (e) {
      if (this.menuLevel == 3) {
         this.collapseLevel3();
         setTimeout(function () {
            if(e == "Size")
            {
               document.getElementsByClassName("level-3")[3].style.height = "270px";
            }
            else if (e == "Warmth")
            {
               document.getElementsByClassName("level-3")[4].style.height = "270px";
            }
            else if (e == "WaterProofing") {
               document.getElementsByClassName("level-3")[5].style.height = "270px";
            }
            this.menuLevel = 3;
         }, 500);
      }
      else {
         if(e == "Size")
         {
            document.getElementsByClassName("level-3")[3].style.height = "270px";
         }
         else if (e == "Warmth")
         {
            document.getElementsByClassName("level-3")[4].style.height = "270px";
         }
         else if (e == "WaterProofing") {
            document.getElementsByClassName("level-3")[5].style.height = "270px";
         }
         this.menuLevel = 3;
      }
   },

   this.boots = function (e) {
      if (this.menuLevel == 3) {
         this.collapseLevel3();
         setTimeout(function () {
            if(e == "Size")
            {
               document.getElementsByClassName("level-3")[6].style.height = "270px";
            }
            else if (e == "LaceType")
            {
               document.getElementsByClassName("level-3")[7].style.height = "270px";
            }
            else if (e == "Color") {
               document.getElementsByClassName("level-3")[8].style.height = "270px";
            }
            this.menuLevel = 3;
         }, 500);
      }
      else {
         if(e == "Size")
         {
            document.getElementsByClassName("level-3")[6].style.height = "270px";
         }
         else if (e == "LaceType")
         {
            document.getElementsByClassName("level-3")[7].style.height = "270px";
         }
         else if (e == "Color") {
            document.getElementsByClassName("level-3")[8].style.height = "270px";
         }
         this.menuLevel = 3;
      }
   },

   this.bindings = function (e) {
      if (this.menuLevel == 3) {
         this.collapseLevel3();
         setTimeout(function () {
            if(e == "Size")
            {
               document.getElementsByClassName("level-3")[6].style.height = "270px";
            }
            else if (e == "Type")
            {
               document.getElementsByClassName("level-3")[9].style.height = "270px";
            }
            else if (e == "Color") {
               document.getElementsByClassName("level-3")[8].style.height = "270px";
            }
            this.menuLevel = 3;
         }, 500);
      }
      else {
         if(e == "Size")
         {
            document.getElementsByClassName("level-3")[6].style.height = "270px";
         }
         else if (e == "Type")
         {
            document.getElementsByClassName("level-3")[9].style.height = "270px";
         }
         else if (e == "Color") {
            document.getElementsByClassName("level-3")[8].style.height = "270px";
         }
         this.menuLevel = 3;
      }
   },

   this.collapseLevel3 = function () {
      var levelThree = document.getElementsByClassName('level-3');
      for(var x = 0; x < levelThree.length; x++)
      {
         levelThree[x].style.height = "0px";
      }
   },

   this.collapseLevel2 = function () {
      var levelTwo = document.getElementsByClassName('level-2');
      for(var x = 0; x < levelTwo.length; x++)
      {
         levelTwo[x].style.height = "0px";
      }
      allMenus.collapseLevel3();
   }
}
