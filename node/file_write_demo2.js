var fs = require("fs");
var FileName = "myfruits.txt";
var FileContent = "\n kiwi pinnapple graps muskmelon";
//append data into file asnchronously
fs.appendFile(FileName,FileContent,function(error){
    if(error!=null)
    {
        console.log(error.message);
    }
    else 
    {
        console.log('file has been created/updated successfully');
    }
});