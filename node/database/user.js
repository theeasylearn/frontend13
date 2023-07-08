var express = require("express");
const nodemailer = require('nodemailer');
var connection = require("./connection");
var pg = require("./PasswordGenerator");
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());

//localhost:5000/register/ankit3385@gmail.com/123123/9662512857
app.post("/register",function(request,response){
    var email = request.body.email;
    var password =request.body.password;
    var mobile = request.body.mobile;
    //check wether given email exist or not and also check given mobile exist or no
    var sql = `select id from users where email='${email}' or mobile='${mobile}'`;
    connection.con.query(sql,function(err,result,fields){
        if(err!=null)
        {
            response.json([{'error':'error occured'}]);
        }
        else 
        {
            var size = result.length;
            if(size>=1)
            {
                response.json([{'error':'no','success':'no','message':'email/mobile is already registered with us'}])
            }
            else 
            {
                sql = `insert into users(email,password,mobile) values ('${email}','${password}','${mobile}')`;
                connection.con.query(sql,function(error,result){
                    if(error!=null)
                    {
                        response.json([{'error':'error occured'}]);
                    }
                    else 
                    {
                        response.json([{'error':'no','success':'yes','message':'user registered'}])
                    }
                });
            }
        }
    });
   
});

app.post("/login",function(request,response){
   var email = request.body.email;
   var password = request.body.password;
   var sql = `select id from users where email='${email}' and password='${password}'`;
   connection.con.query(sql,function(error,result,fields){
        if(error)
        {
            response.json([{'error':'error occured'}]);
        }
        else 
        {
            let size = result.length;
            if(size==0) //no row found 
            {
                response.json([{'error':'no'},{'success':'no'},{'message':'invalid login attampt'}]);
            }
            else 
            {
                response.json([{'error':'no'},{'success':'yes'},{'message':'login successfull'},{'id':result[0].id}]);
            }
        }
   });
});

app.post("/change-password",function(request,response){
    let password = request.body.password;
    let new_password = request.body.new_password;
    let id = request.body.id;
    let sql = `select id from users where id=${id} and password='${password}'`;
    connection.con.query(sql,function(error,result,fields){
        if(error)
        {
            response.json([{'error':'error occured'}]);
        }
        else 
        {
           let size = result.length;
           if(size === 0)
           {
                response.json([{'error':'no'},{'success':'no'},{'message':'invalid password'}]);
           }
           else 
           {
             //update password
             sql = `update users set password='${new_password}' where id=${id}`;
             connection.con.query(sql,function(err,result){
                 if(err!=null)
                 {
                    response.json([{'error':'error occured'}]);
                 }
                 else 
                 {
                    response.json([{'error':'no'},{'success':'yes'},{'message':'password changed successfully'}]);
                 }
             });
           }
        }
    });
});
app.post("/forgot-password",function(request,response){
    var email = request.body.email;
    var sql = `select id from users where email='${email}'`;
    connection.con.query(sql,function(error,result,fields){
        if(error)
            response.json([{'error':'error occured'}]);
        else 
        {
            var size = result.length;
            if(size === 0)
                 response.json([{'error':'no'},{'success':'no'},{'message':'email is not registered with us'}]);
            else 
            {
                //generate random password
                var new_password = pg.generate(12);
                sql = `update users set password='${new_password}' where email='${email}'`;
                connection.con.query(sql,function(error,result){
                    if(error)
                        response.json([{'error':'error occured'}]);
                    else 
                    {
                        const gmail = nodemailer.createTransport({
                            service: "Gmail",
                            auth: {
                                user: "ankit3385@gmail.com", //sender email address
                                pass: "aspzuihkezhozuts"
                            }
                        });
                        async function send()
                        {
                            let info = await gmail.sendMail(
                                {
                                    from: "ankit3385@gmail.com",
                                    to: email,
                                    subject: `Acount Recovery email for ${email}`,
                                    html: `Hello  <br/> We just recovered your account <br/> your new password is ${new_password} <br/> Greeting from <b>Ankit Patel </b>`
                                }
                            )
                            //console.log(info);
                            response.json([{'error':'no'},{'success':'yes'},{'message':'new password is sent to you on your registered email address'}]);
                        }
                        send().catch((error) =>{
                            console.log("we got error while sending email");
                        });
                        
                    }
                });
            }
        }
    });
});
app.listen(5000);
console.log('ready to accept request');