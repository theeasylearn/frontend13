var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var DatabaseURL = "mongodb://localhost:27017/frontend13";
MongoClient.connect(DatabaseURL,function(error,database){
    if(error)
        console.log(error.errmsg);
    else 
    {
        var db = database.db('frontend13'); //db return reference of database
        db.createCollection('customers',function(error,result){
            if(error)
                console.log(error.errmsg);
            else 
            {
                console.log('collection created....');
                database.close();
            }
        });
    }
});

