var fs = require("fs");
var current_filename = "india.txt";
var new_filename = "bharat.txt";
fs.rename(current_filename,new_filename,function(error){
    if(error!=null)
    {
        console.log('file could not be renamed');
    }
    else 
    {
        console.log('file renamed.....');
    }
    console.log('good bye');
});
