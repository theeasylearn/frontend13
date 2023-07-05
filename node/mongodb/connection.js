var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var DatabaseURL = "mongodb://localhost:27017/frontend13"
MongoClient.connect(DatabaseURL,function(error,db){
    if(error)
        console.log(error.errmsg)
    else 
        console.log('connected with database');
    db.close();
});

