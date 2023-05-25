var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer(function(request,response){
    var page = url.parse(request.url,true);
    var pagename = page.pathname;
    pagename  = pagename.substring(1);
    console.log(pagename);
    fs.readFile(pagename,function(error,FileContent){
        response.writeHead(200,{'content-type':'text/html'});
        if(error!=null)
        {
            response.writeHead(404,{'content-type':'text/html'});
            response.write('page not found');
        }
        else 
        {
            response.writeHead(200,{'content-type':'text/html'});
            response.write(FileContent);
        }
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request.....');