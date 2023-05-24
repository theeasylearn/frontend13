var fs = require('fs');
var filename = 'letters.txt';
fs.open(filename,'r',function(error,file){
    if(error!=null)
    {
        console.log('no such file exists');
    }
    else 
    {
        console.log('file opened successfully');
        //read first 10 letter from the file 
        var data= new Buffer.alloc(128);
        var offset = 0;
        var no_of_characters_to_read = 100;
        var position=0;
        fs.read(file,data,offset,no_of_characters_to_read,position,function(err,length){
            if(err!=null)
            {
                console.log('sorry, can not read data from file');
            }
            else if(length>0) 
            {
                console.log('we got some data from file');
                console.log(data.slice(0,length).toString());
            }
            else 
            {
                console.log('file has nothing to read');
            }
            fs.close(file);
        });
    }
});