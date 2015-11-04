var w = document.body.clientWidth;
var dropDownContents = document.getElementsByClassName('nav-dropdown-items');
dropDownContents[0].style.display = "none";
var px = "px";


bodyResize();
var topBar = document.getElementById('all-top-bars');
topBar.style.display = "block";

function bodyResize()
{
   var w = document.body.clientWidth;
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

function checkPass(){
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   var passwordTwo = document.getElementById('passwordConfirm').value;
   user.push(new userTemp(email, password));
}

var userTemp = function (email, password) {
   this.email = email;
   this.password = password;
}
