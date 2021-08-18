const fs = require("fs");

let data=fs.readFile(process.argv[2], {encoding:"utf8", flag:"r"}, function(err,data){
    if(err) console.log(err);
    console.log(data.split("\n").length -1 );
    
});
