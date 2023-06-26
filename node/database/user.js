var express = require("express");
var connection = require("./connection");
var bodyParser = require('body-parser');
var app = express();
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());

//localhost:5000/register/ankit3385@gmail.com/123123/9662512857
app.post("/register",function(request,response){
    var email = request.body.email;
    var password =request.body.password;
    var mobile = request.body.mobile;
    var sql = `insert into users(email,password,mobile) values ('${email}','${password}','${mobile}')`;
    connection.con.query(sql,function(error,result){
        if(error!=null)
        {
            response.json({'error':'error occured'});
        }
        else 
        {
            response.json({'error':'no','success':'yes','message':'user registered'})
        }
    });
});

app.listen(5000);
console.log('ready to accept request');