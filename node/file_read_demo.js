var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
    var url = request.url;
    var filename = '';
    if(url == '/')
    {
        filename = "home.html";
    }
    else if(url == '/aboutus')
    {
        filename = "aboutus.html";
    }
    else if(url == '/contactus')
    {
       filename = "contactus.html"
    }
    else 
    {
        filename="404.html";
    }
    fs.readFile(filename,function(error,FileContent){
        response.writeHead(200,{'content-type':'text/html'});
        if(error!=null)
            response.write('Error occured.....');
        else 
            response.write(FileContent);
        
        response.end();
    });
   
});

server.listen(5000);
console.log('ready to accept request.....');