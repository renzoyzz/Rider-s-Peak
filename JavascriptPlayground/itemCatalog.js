console.log("is this working");

var snowboardsInventory = [];

var snowboardsTemp = function(name, pictureTag) {
   this.brand = brandRandomizer();
   this.name = name;
   this.pictureTag = pictureTag;
   this.price = Math.floor((Math.random() * 200) + 300) +.99;
   this.size = Math.floor((Math.random() * 15) + 145 );
   this.type = snowboardTypeGenerator();
   this.wide = [];
   this.wide = snowboardWidth();
   this.description = "Preferred by Burton's backcountry jump-boosting and superpipe-dominating pros, the Custom Flying V Snowboard is a one-board quiver capable of slaying huge jumpes, icy pipes, and bottomless powder. Between it's versatile profile, poppy feel, and lightweight construction, it's not hard to see why the Custom has been dominating the snowboarding world for the last twenty years.";
}


for (var x = 0; x < 100; x++)
{
   snowboardsInventory.push(new snowboardsTemp('Gang Plank Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/ROM/ROM004X/S149CM.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Summer Funslinger Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/NVS/NVS002I/ONECOL.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('TWC Pro Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/BUR/BUR010Z/ONECOL.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Public Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/YES/YES000K/ONECOL.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('PBJ Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/DCS/DCS00FZ/S144CM.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Snowboards Hit Machine Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/K2S/K2S000K/S149CM.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('CamRock Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/TCN/TCN001O/BK.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Snowboards Sabotage Classicks Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/SAL/SAL006G/ONECOL.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Antler Flying V Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/BUR/BUR010U/ONECOL.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Mark Landvik Phoenix C2-BTX Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/LBT/LBT001A/ONECOL.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Berzerker Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/RDE/RDE002K/S152CM.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Snowboards Craft Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/SAL/SAL006M/ONECOL.jpg" alt="" />'));
   snowboardsInventory.push(new snowboardsTemp('Artifact Rocker Snowboard', '<img class="product-image-set-attribute" src="http://content.backcountry.com/images/items/large/ROM/ROM005M/S155CM.jpg" alt="" />'));
}

function brandRandomizer ()
{
   var brandsArray = ['Rome', 'NeverSummer', "Burton", "Yes", "DC", "K2", "Technine", "Salomon", "LibTech", "Ride"];
   var brandChooser = Math.floor((Math.random() * 10));
   return brandsArray[brandChooser];
}

function snowboardTypeGenerator ()
{
   var typeChooser = Math.floor((Math.random() * 11));
   if(typeChooser < 5)
   {
      return "AllMountain";
   }
   else if (typeChooser < 9)
   {
      return "Freestyle";
   }
   else {
      return "SplitBoard";
   }
}

function snowboardWidth ()
{
   var typeChooser = Math.floor((Math.random() * 11));
   if (typeChooser < 9)
   {
      return ["Normal", "Wide"];
   }
   else {
      return ["", "Wide"];
   }
}
