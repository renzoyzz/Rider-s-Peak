var req = new XMLHttpRequest();

console.log("sending request");

req.open("GET", "database.txt");
req.send();
req.addEventListener("load", function(){
   console.log(req.response);
});
req.addEventListener("error", function(){
   console.log("Failed to load file");
});
