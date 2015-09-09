var http = require("http");

var arr = [];

http.get("http://omdbapi.com/?i=tt0241527",function(res){
  res.setEncoding("utf8");
  res.on("data",function(data){
    arr.push(data);
    console.log(data);
  });
  res.end();
});