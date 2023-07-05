var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var DatabaseURL = "mongodb://localhost:27017/frontend13";
MongoClient.connect(DatabaseURL,function(error,database){
    if(error)
        console.log(error.errmsg);
    else 
    {
        var db = database.db('frontend13'); //db return reference of database
        var customer = {
            name: 'Krishna',
            surname : 'yaduvanshi',
            age: 189

        }
        db.collection('customers').insertOne(customer,function(error,result){
            if(error)
                 console.log(error.errmsg);
            else 
                console.log('1 document inserted...');
        });
    }
});

