var mongodb = require("mongodb");
var ObjectId = require("mongodb").ObjectId;
var MongoClient = mongodb.MongoClient;
var DatabaseURL = "mongodb://localhost:27017/frontend13";
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());


//localhost:5000/customers
app.get("/customers",function(request,response){
    MongoClient.connect(DatabaseURL,function(error,database){
        if(error)
            response.json({'error':'error occcured'});
        else 
        {
            var db = database.db('frontend13');
            db.collection("customers").find({},{}).toArray(function(error,result){
                if(error)
                    response.json({'error':'error occcured'});
                else 
                    var output_as_json = JSON.parse(JSON.stringify(result));
                    response.send(output_as_json);
            });
        }   
    });

});

//localhost:5000/customers/64a5460f27301b8d692db2a3

app.get("/customers/:id",function(request,response){
    MongoClient.connect(DatabaseURL,function(error,database){
        if(error)
            response.json({'error':'error occcured'});
        else 
        {
            var db = database.db('frontend13');
            var condition = {_id: new ObjectId(request.params.id)}
            db.collection("customers").find(condition,{}).toArray(function(error,result){
                if(error)
                    response.json({'error':'error occcured'});
                else 
                    var output_as_json = JSON.parse(JSON.stringify(result));
                    response.send(output_as_json);
            });
        }   
    });

});

app.post("/customers",function(request,response){
    var name = request.body.name;
    var city = request.body.city;

    if(name === undefined || city === undefined)
    {
        response.json({'error':'input missing'});
    }
    else 
    {
        MongoClient.connect(DatabaseURL,function(error,database){
            if(error)
                response.json({'error':'error occcured'});
            else 
            {
                var db = database.db('frontend13');
                var customer = {
                    name : name,
                    city : city,
                };
                db.collection('customers').insertOne(customer,function(error,result){
                    if(error) response.json({'error':'error occcured'});
                    else  response.json({'error':'no','message':'document inserted'});
                });
            }
        });
    }
});

app.put("/customers",function(request,response){
    var name = request.body.name;
    var city = request.body.city;
    var id = request.body.id;

    if(name === undefined || city === undefined || id == undefined)
    {
        response.json({'error':'input missing'});
    }
    else 
    {
        MongoClient.connect(DatabaseURL,function(error,database){
            if(error)
                response.json({'error':'error occcured'});
            else 
            {
                var db = database.db('frontend13');
                var condition = { _id : new ObjectId(id)};
                var customer = {
                    $set : {
                        name : name,
                        city : city,
                    }
                };
                db.collection('customers').updateOne(condition,customer,function(error,result){
                    if(error) response.json({'error':'error occcured'});
                    else  response.json({'error':'no','message':'document updated'});
                });
            }
        });
    }
});
app.listen(5000);
console.log('ready to accept request');
