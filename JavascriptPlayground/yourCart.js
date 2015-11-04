cartArray = [];

var cartPendingItem;
var totalCost;
function addToCart () {
   cartArray.push(cartPendingItem);
}

function displayCart () {

   var h = "";
   h +=  '<div class="modal-content">'
   h +=   '<div class="modal-header">'
   h +=      '<button type="button" class="close" data-dismiss="modal">&times;</button>'
   h +=      '<h1>Your Cart</h1>'
   h +=   '</div>'
   h +=   '<div class="modal-body">'
   h +=   '<div id="cart-product-outer-div">'
   for(var x = 0; x < cartArray.length; x++)
   {
      h += '<div class="row cart-product">';
      h +=    '<div class="col-sm-12">';
      h +=       '<div class="col-xs-3 cart-product-image">'
      h +=           cartArray[x].pictureTag;
      h +=       '</div>'
      h +=       '<h4 class="col-sm-4 cart-product-title">' + cartArray[x].brand + " " + cartArray[x].name + '</h4>';
      h +=       '<button onclick="removeFromCart(' + x + ')" class="col-sm-3 cart-product-remove" type="button" name="button">Remove From Cart</button>';
      h +=       '<h4 class="col-sm-2 cart-product-price">$' + cartArray[x].price + '</h4>';
      h +=    '</div>';
      h += '</div>';
   }
   h += '</div>';
   h += '</div>';
   h += '<div class="modal-footer">';
   h += '<div class="row">'

   h +=   '<div class="col-sm-7 shipping-options">';
   h +=      '<h5>CHOOSE A SHIPPING OPTION</h5>';
   h +=      '<label><input onclick="total()" class="shipping-radio-buttons" type="radio" name="shipping" value="" checked="checked"> Economy[5-10 days] ($5.95)</label>';
   h +=      '<label><input onclick="total()" class="shipping-radio-buttons" type="radio" name="shipping" value=""> Standard[3-5 days] ($7.95)</label>';
   h +=      '<label><input onclick="total()" class="shipping-radio-buttons" type="radio" name="shipping" value=""> Two Business Day ($14.95)</label>';
   h +=      '<label><input onclick="total()" class="shipping-radio-buttons" type="radio" name="shipping" value=""> Next Business Day ($24.95)</label>';
   h +=   '</div>';
   h +=   '<div class="col-sm-5 checkout-labels-and-values">';
   h +=      '<table class="table">';
   h +=         '<tr>';
   h +=          '<td class="cart-table-cells">Subtotal</td>';
   h +=          '<td id="subtotalHere">subhere</td>';
   h +=         '</tr>';
   h +=         '<tr>';
   h +=          '<td class="cart-table-cells">Shipping</td>';
   h +=          '<td id="shipHere">ship here</td>';
   h +=         '</tr>';
   h +=         '<tr class="total-border">';
   h +=          '<td class="cart-table-cells">Tax</td>';
   h +=          '<td id="taxHere">Tax Here</td>';
   h +=         '</tr>';
   h +=         '<tr>';
   h +=          '<td class="cart-table-cells">Total</td>';
   h +=          '<td id="totalHere">Total here</td>';
   h +=         '</tr>';
   h +=      '</table>';
   h +=      '<button type="button" onclick="checkOut()" class="btn btn-default" id="checkoutButton">Check Out</button>';
   h +=   '</div>';
   h += '</div>';
   h += '</div>';
   document.getElementsByClassName("modal-dialog")[0].innerHTML = h;
   $(".modal-dialog").css("color", "#333");
   $(".modal-dialog").css("margin-top", "30px");
   total();
}

function checkOut() {
   $("#checkoutButton").attr("onclick", "");
   $("#cart-product-outer-div").hide(400);
   var h = "";
   h +=   '<form>'
   h +=      '<div class="form-group">';
   h +=         '<label for="credit">Credit Card:</label>';
   h +=         '<input type="text" class="form-control" id="creditCard" placeholder="Debit/Credit Card Number">';
   h +=      '</div>';
   h +=      '<div class="form-group">';
   h +=         '<label for="name">Name On Card:</label>';
   h +=         '<input type="text" class="form-control" id="nameCard" placeholder="Card Holder\'s Name">';
   h +=      '</div>';
   h +=      '<div class="form-inline">';
   h +=         '<label for="security">Card CVV:</label>';
   h +=         '<input type="text" class="form-control" id="security" placeholder="***">';
   h +=         '<label for="date">Experation:</label>';
   h +=         '<input type="date" class="form-control" id="expiration">';
   h +=      '</div>';
   h +=      '<div class="form-group">';
   h +=         '<label for="address">Address:</label>';
   h +=          '<input type="text" class="form-control" id="address" placeholder="Home Address">';
   h +=      '</div>';
   h +=      '<div class="form-inline">';
   h +=        '<div class="form-group">';
   h +=          '<label for="city">City:</label>';
   h +=          '<input type="text" class="form-control" id="city" placeholder="City">';
   h +=        '</div>';
   h +=        '<div class="form-group">';
   h +=          '<label for="zipcode">Zipcode:</label>';
   h +=          '<input type="text" class="form-control" id="zipCode" placeholder="*****">';
   h +=        '</div>';
   h +=      '</div>';
   h +=    '</form>';
   document.getElementById('cart-product-outer-div').innerHTML = h;
   $("#cart-product-outer-div").show(400);
   setTimeout(function () {
      $("#checkoutButton").attr("class", "btn btn-success");
      $("#checkoutButton").html("Confirm Purchase");
      $("#checkoutButton").attr("onclick", "confirmPurchase()");
   }, 400);

}

function confirmPurchase () {
   $(".modal-footer").hide(400);
   $(".modal-footer").show();
   $(".modal-dialog").html("<h1>THANK YOU FOR YOUR PURCHASE!<h1>");
   $(".modal-dialog").css("margin-top", "250px");
   $(".modal-dialog h1").css("color", "white");
   cartArray = [];
}

function removeFromCart(e) {
   cartArray.splice(e, 1);
   displayCart();
}

function shippingCost() {
   var radioButtons = document.getElementsByClassName("shipping-radio-buttons");
      if(radioButtons[0].checked)
      {
         return 5.95;
      }
      else if(radioButtons[1].checked)
      {
         return 7.95;
      }
      else if(radioButtons[2].checked)
      {
         return 14.95;
      }
      else if(radioButtons[3].checked)
      {
         return 24.95;
      }
}

function total () {
   var totalSum = 0;
   for(var x = 0; x < cartArray.length; x++)
   {
      totalSum += cartArray[x].price;
   }
   document.getElementById("subtotalHere").innerHTML = "$" + totalSum.toFixed(2).toString();
   var shipping = shippingCost();
   totalSum += shipping;
   document.getElementById("shipHere").innerHTML = "$" + shipping.toFixed(2).toString();
   totalCost = totalSum;
   document.getElementById("taxHere").innerHTML = "$" + (totalCost * .06).toFixed(2).toString();
   totalCost = totalCost * 1.06;
   document.getElementById("totalHere").innerHTML = "$" + totalCost.toFixed(2).toString();
}
