const filterFN = require('./mymodule.js');

filterFN(process.argv[2],process.argv[3],function(err,list){
    if (err) return console.log(err);
    list.forEach((file)=> console.log(file));
})