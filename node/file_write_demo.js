var fs = require("fs");
var FileName = "fruits.txt";
var FileContent = "kiwi pinnapple graps";
//write data into file asnchronously
fs.writeFile(FileName,FileContent,function(error){
    if(error!=null)
    {
        console.log(error.message);
    }
    else 
    {
        console.log('file has been created/updated successfully');
    }
});