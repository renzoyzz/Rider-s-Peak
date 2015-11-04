var itemPictures = ['<img src="http://boarderswithoutbordersmovie.com/wp-content/uploads/2012/07/burton-flying-v-snowboard.jpg" alt="" />',
'<img src="http://images.the-house.com/burton-flint-snwbrd-jkt-crimson-teamblu-15-1-prod.jpg" alt="" />',
'<img src="http://images.the-house.com/boulder-gear-summit-snow-pant-navy-14-prod.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/900/RDE/RDE0648/BK.jpg" alt="" />',
'<img src="http://www.rei.com/zoom/hh/8a948b07-ff0a-4aed-94d9-bb484cd7280a.jpg/440" alt="" />'];

var snowBoards = ['<img src="http://images.evo.com/imgp/1500/68669/352120/burton-clash-snowboard-2014-139.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/SAL/SAL00GR/ONECOL.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/BUR/BUR00OS/S150CM.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/LBT/LBT001I/STE.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/JSB/JSB000R/ONECOL.jpg" alt="" />'];

var jackets = ['<img src="http://content.backcountry.com/images/items/large/BUR/BUR5878/PUT.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/BUR/BUR00QC/DUSCHE.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/VLC/VLC9AA2/NV.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/ANL/ANL1405/ADO.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/PAT/PAT00I8/AQSN.jpg" alt="" />'];

var pants = ['<img src="http://content.backcountry.com/images/items/large/SWI/SWI0208/UPBLK.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/MAR/MAR1771/TURDOV.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/SPD/SPD00F1/ELEBL.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/MAR/MAR2573/SLGRE.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/medium/BUR/BUR006N/GRA.jpg" alt="" />'];

var boots = ['<img src="http://content.backcountry.com/images/items/large/SAL/SAL007N/BLARED.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/SAL/SAL007V/TURGREPK.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/SAL/SAL2598/WHI.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/SAL/SAL00H8/BLA.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/SAL/SAL00HF/BLAJUI.jpg" alt="" />'];

var bindings = ['<img src="http://content.backcountry.com/images/items/large/UNN/UNN000L/METBL.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/SAL/SAL007Y/WHI.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/BUR/BUR6280/BK.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/FLX/FLX000G/HAW.jpg" alt="" />',
'<img src="http://content.backcountry.com/images/items/large/GNU/GNU001I/BK.jpg" alt="" />'];

var constantBrandRand = setInterval(function(){changeImages();}, 750);;
var randomOn = true;

function startEndRandomizer() {
   if(!randomOn)
   {
      document.getElementById("random-pause").innerHTML = '<i class="fa fa-pause"></i>';
      constantBrandRand = setInterval(function(){changeImages();}, 750);
      randomOn = true;
   }
   else {
      document.getElementById("random-pause").innerHTML = '<i class="fa fa-play"></i>';
      clearInterval(constantBrandRand);
      randomOn = false;
   }
}

function allBrandRand ()
{
   var interval = setInterval(function () {
      changeImages();
   }, 1);
   setTimeout(function () {
      clearInterval(interval);
   }, 3000);
}


function changeImages() {
   var imageChooser = (Math.floor(Math.random() * 5));
   if(imageChooser == 0)
   {
      var newPicture = (Math.floor(Math.random() * 5));
      var colChooser = (Math.floor(Math.random() * 6));
      var pictureChosen = 5 * colChooser;
      //test(newPicture, pictureChosen);
      changeSnowboards(newPicture, pictureChosen);
   }
   else if( imageChooser == 1)
   {
      var newPicture = (Math.floor(Math.random() * 5));
      var colChooser = (Math.floor(Math.random() * 6));
      var pictureChosen = 5 * colChooser + 1;
      changeJackets(newPicture, pictureChosen);
   }
   else if (imageChooser ==  2) {
      var newPicture = (Math.floor(Math.random() * 5));
      var colChooser = (Math.floor(Math.random() * 6));
      var pictureChosen = 5 * colChooser + 2;
      changePants(newPicture, pictureChosen);
   }
   else if (imageChooser == 3) {
      var newPicture = (Math.floor(Math.random() * 5));
      var colChooser = (Math.floor(Math.random() * 6));
      var pictureChosen = 5 * colChooser + 3;
      changeBoots(newPicture, pictureChosen);
   }
   else if (imageChooser == 4) {
      var newPicture = (Math.floor(Math.random() * 5));
      var colChooser = (Math.floor(Math.random() * 6));
      var pictureChosen = 5 * colChooser + 4;
      changeBindings(newPicture, pictureChosen);
   }
   else {
      console.log("ERROR WITH RANDOMIZER");
   }

}

function changeSnowboards(newPicture, pictureChosen)
{
   var picture = document.getElementsByClassName('brand');
   picture[pictureChosen].style.transform = 'rotateY(630deg)';
   setTimeout(function () {
      picture[pictureChosen].innerHTML = snowBoards[newPicture];
      picture[pictureChosen].setAttribute("style", '');
   }, 1000);

   /*var picture = document.getElementsByClassName('brand');
   picture[0].style.transform = 'rotateX(630deg)';
   setTimeout(function () {
      picture[0].setAttribute("style", '');
      //picture[0].innerHTML = boots[1];
   }, 1000);*/

}

function changeJackets (newPicture, pictureChosen)
{
   var picture = document.getElementsByClassName('brand');
   picture[pictureChosen].style.transform = 'rotateY(630deg)';
   setTimeout(function () {
      picture[pictureChosen].innerHTML = jackets[newPicture];
      picture[pictureChosen].setAttribute("style", '');
   }, 1000);

}

function changePants (newPicture, pictureChosen)
{
   var picture = document.getElementsByClassName('brand');
   picture[pictureChosen].style.transform = 'rotateY(630deg)';
   setTimeout(function () {
      picture[pictureChosen].innerHTML = pants[newPicture];
      picture[pictureChosen].setAttribute("style", '');
   }, 1000);
}

function changeBoots (newPicture, pictureChosen)
{
   var picture = document.getElementsByClassName('brand');
   picture[pictureChosen].style.transform = 'rotateY(630deg)';
   setTimeout(function () {
      picture[pictureChosen].innerHTML = boots[newPicture];
      picture[pictureChosen].setAttribute("style", '');
   }, 1000);
}

function changeBindings (newPicture, pictureChosen)
{
   var picture = document.getElementsByClassName('brand');
   picture[pictureChosen].style.transform = 'rotateY(630deg)';
   setTimeout(function () {
      picture[pictureChosen].innerHTML = bindings[newPicture];
      picture[pictureChosen].setAttribute("style", '');
   }, 1000);
}

//the animation works here. Dont know why.
function test(newPicture, pictureChosen)
{
   var picture = document.getElementsByClassName('brand');
   picture[pictureChosen].style.transform = 'rotateX(630deg)';
   setTimeout(function () {
      picture[pictureChosen].innerHTML = boots[newPicture];
      picture[pictureChosen].setAttribute("style", '');
   }, 1000);
}
