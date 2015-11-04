var matchedProducts = [];


function matchProduct (e) {
   if(allMenus.productChosen == "Snowboard")
   {
      matchSnowboard (e);
   }
}

function matchSnowboard (e) {
   matchedProducts = [];
   filterTree(e);
   for(var x = 0; x < snowboardsInventory.length; x++)
   {
      if (allMenus.filterChosen == "Size") {
         if(e == "145-150cm")
         {
            if(snowboardsInventory[x].size > 144 && snowboardsInventory[x].size < 151 && snowboardsInventory[x].brand == allMenus.brandChosen)
            {
               matchedProducts.push(snowboardsInventory[x]);
            }
         }
         else if(e == "150-155cm")
         {
            if(snowboardsInventory[x].size > 149 && snowboardsInventory[x].size < 156 && snowboardsInventory[x].brand == allMenus.brandChosen)
            {
               matchedProducts.push(snowboardsInventory[x]);
            }
         }
         else if(e == "155-160cm")
         {
            if(snowboardsInventory[x].size > 154 && snowboardsInventory[x].size < 161 && snowboardsInventory[x].brand == allMenus.brandChosen)
            {
               matchedProducts.push(snowboardsInventory[x]);
            }
         }
      }
      else if (allMenus.filterChosen == "Type") {
         if(e == "AllMountain")
         {
            if(snowboardsInventory[x].type == e && snowboardsInventory[x].brand == allMenus.brandChosen)
            {
               matchedProducts.push(snowboardsInventory[x]);
            }
         }
         else if(e == "Freestyle")
         {
            if(snowboardsInventory[x].type == e && snowboardsInventory[x].brand == allMenus.brandChosen)
            {
               matchedProducts.push(snowboardsInventory[x]);
            }
         }
         else if(e == "SplitBoard")
         {
            if(snowboardsInventory[x].type == e && snowboardsInventory[x].brand == allMenus.brandChosen)
            {
               matchedProducts.push(snowboardsInventory[x]);
            }
         }
      }
      else if (allMenus.filterChosen == "IsWide") {
         if(e == "Normal")
         {
            if(snowboardsInventory[x].wide[0] == e && snowboardsInventory[x].brand == allMenus.brandChosen)
            { 
               matchedProducts.push(snowboardsInventory[x]);
            }
         }
         else if(e == "Wide")
         {
            if(snowboardsInventory[x].wide[1] == e && snowboardsInventory[x].brand == allMenus.brandChosen)
            {
               matchedProducts.push(snowboardsInventory[x]);
            }
         }
      }
   }
   fillSearch();
}

function filterTree (e) {
   document.getElementById('filter-tree').innerHTML = '<h3 onclick="">' + allMenus.categoryChosen + '</h3><h3 onclick="">/' + allMenus.brandChosen + '</h3><h3 onclick="">/' + allMenus.productChosen + '</h3><h3 onclick="">/' + allMenus.filterChosen + '</h3><h3 onclick="">/' + e + '</h3>'
}

var searchResults = "";

function fillSearch()
{
   searchResults = "";
   for(var x = 0; x < matchedProducts.length; x++)
   {
      searchResults += '<div class="product-div col-md-3 id="matched-product-' + x + '">';
      searchResults +=  '<button onclick="modalProduct(this.id)" data-toggle="modal" id=' + x + '" data-target="#myModal" type="button" name="button">'
      searchResults +=     '<div class="prodcut-image">' + matchedProducts[x].pictureTag + '</div>';
      searchResults +=     '<h4 class="product-name">' + matchedProducts[x].brand + ' ' +  matchedProducts[x].name + '</h4>';
      searchResults +=     '<p class="size">' + matchedProducts[x].size + 'cm</p>';
      searchResults +=     '<p class="price">$' + matchedProducts[x].price + '</p>';
      searchResults +=  '</button>'
      searchResults += '</div>';
   }
   document.getElementById('product-outer-div').innerHTML = searchResults;
   allMenus.collapseMenu();
}

function refreshHomePage () {
   var homePage = '<div class="product-outer-div">';
   homePage +=   '<div class="col-md-4  new-product" id="new-product-1">';
   homePage +=      '<img src="http://content.backcountry.com/promo_upload/bcs/2015/31415/SF1.jpg" alt="" />';
   homePage +=      '<div class="col-xs-12 new-product-headline">';
   homePage +=         '<h3>NEW MARMOT CLOTHING FOR THE NEW SEASON</h3>';
   homePage +=         '<p>LAYER UP FOR FALL</p>';
   homePage +=      '</div>';
   homePage +=   '</div>';
   homePage +='</div>';
   homePage +='<div class="product-outer-div">';
   homePage +=   '<div class="col-md-4  new-product" id="new-product-1">';
   homePage +=      '<img src="http://content.backcountry.com/promo_upload/bcs/2015/30105/SF1.jpg" alt="" />';
   homePage +=      '<div class="col-xs-12 new-product-headline">';
   homePage +=         '<h3>ALL-NEW BOARDS AND BOOTS FROM BURTON</h3>';
   homePage +=         '<p>Fresh Rides</p>';
   homePage +=      '</div>';
   homePage +=   '</div>';
   homePage +='</div>';
   homePage +='<div class="product-outer-div">';
   homePage +=   '<div class="col-md-4  new-product" id="new-product-1">';
   homePage +=      '<img src="http://walnutcreekcrossfit.com/wp-content/uploads/2013/03/snowboarding-snowboard-powder-turns-pdfcast.jpg" alt="" />';
   homePage +=      '<div class="col-xs-12 new-product-headline">';
   homePage +=         '<h3>BRECK JUST GOT DUMPED</h3>';
   homePage +=         '<p>Pow Hounds</p>';
   homePage +=      '</div>';
   homePage +=   '</div>';
   homePage +='</div>';
   homePage +='<div class="product-outer-div">';
   homePage +=   '<div class="col-md-6  new-product" id="new-product-1">';
   homePage +=      '<img src="http://farm7.static.flickr.com/6112/6327626227_d4ccf809f2_b.jpg" alt="" />';
   homePage +=      '<div class="col-xs-12 new-product-headline">';
   homePage +=         '<h3>TRAVIS RICE LEAVES LIB TECH</h3>';
   homePage +=         '<p>A Legend Progresses</p>';
   homePage +=      '</div>';
   homePage +=   '</div>';
   homePage +='</div>';
   homePage +='<div class="product-outer-div">';
   homePage +=   '<div class="col-md-6  new-product" id="new-product-1">';
   homePage +=      '<img src="http://www.snow.com/~/media/hero%20images/snow/epicpass/vr.5868.bestmountainonepassheroimages_732x253_01a.ashx" alt="" />';
   homePage +=      '<div class="col-xs-12 new-product-headline">';
   homePage +=         '<h3>EPIC PASS FOR THE 2015-2016 SEASON</h3>';
   homePage +=         '<p>Be Prepared</p>';
   homePage +=      '</div>';
   homePage +=   '</div>';
   homePage +='</div>';
   homePage +='<div class="product-outer-div">';
   homePage +=   '<div class="col-md-6  new-product" id="new-product-1">';
   homePage +=      '<img src="https://media.licdn.com/media/p/5/000/29c/32c/1a5f15d.png" alt="" />';
   homePage +=      '<div class="col-xs-12 new-product-headline">';
   homePage +=         '<h3>ROMES NEW SHRED COLLECTION</h3>';
   homePage +=         '<p>Shred Harder</p>';
   homePage +=      '</div>';
   homePage +=   '</div>';
   homePage += '</div>';
   document.getElementById('product-outer-div').innerHTML = homePage;
   document.getElementById('filter-tree').innerHTML = "";
}

var modalProduct = function (e) {
   var h = "";
   h += '<div class="modal-content">'
   h +=   '<div class="modal-header">'
   h +=      '<button type="button" class="close" data-dismiss="modal">&times;</button>'
   h +=      '<h2 class="modal-title brand-modal">Brand</h2>'
   h +=      '<h4 class="modal-title name-modal">Product Name</h4>'
   h +=   '</div>'
   h +=   '<div class="modal-body">'
   h +=      '<div class="col-xs-4">'
   h +=         '<p class="description-modal"></p>'
   h +=      '</div>'
   h +=      '<div class="col-xs-8">'
   h +=         '<div class="imageTag-modal">'
   h +=         '</div>'
   h +=         '<div class="col-xs-4 col-xs-offset-4">'
   h +=            '<div class="dropdown">'
   h +=               '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Normal<span class="caret"></span></button>'
   h +=               '<ul class="dropdown-menu">'
   h +=                  '<li>Normal</li>'
   h +=                  '<li>Wide</li>'
   h +=               '</ul>'
   h +=            '</div>'
   h +=            '<h4 class="price-modal">$Price</h4>'
   h +=            '<h3 class="size-modal">150cm</h3>'
   h +=         '</div>'
   h +=      '</div>'
   h +=   '</div>'
   h +=   '<div class="modal-footer">'
   h +=      '<button type="button" onclick="addToCart()" class="btn btn-default" data-dismiss="modal">Put In Cart</button>'
   h +=   '</div>'
   h +=  '</div>'

   document.getElementsByClassName("modal-dialog")[0].innerHTML = h;


   this.productId = parseInt(e);
   this.product = matchedProducts[this.productId]

   document.getElementsByClassName("modal-title")[0].innerHTML = this.product.brand;
   document.getElementsByClassName("modal-title")[1].innerHTML = this.product.name;
   document.getElementsByClassName("description-modal")[0].innerHTML = this.product.description;
   document.getElementsByClassName("price-modal")[0].innerHTML = "$" + this.product.price;
   document.getElementsByClassName('imageTag-modal')[0].innerHTML = this.product.pictureTag;
   cartPendingItem = this.product;
}
