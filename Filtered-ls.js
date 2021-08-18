
const fs = require("fs");
const path = require('path')
const extName= '.' + process.argv[3];


fs.readdir(process.argv[2], {encoding:"utf8", flag:"r"}, function(err, list){
    if(err) console.log(err);
    list.forEach(el => {
        if(path.extname(el) === extName) console.log(el);
    });
});