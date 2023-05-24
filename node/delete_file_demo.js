var fs = require("fs");
var filename = "badhabits.txt";
fs.unlink(filename,function(error){
    if(error!=null)
    {
        console.log('file could not be deleted');
    }
    else 
    {
        console.log('file deleted.....');
    }
    console.log('good bye');
});
