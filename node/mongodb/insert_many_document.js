var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var DatabaseURL = "mongodb://localhost:27017/frontend13";
MongoClient.connect(DatabaseURL,function(error,database){
    if(error)
        console.log(error.errmsg);
    else 
    {
        var db = database.db('frontend13'); //db return reference of database
        var customers = [
                 {name: 'Krishna', surname : 'yaduvanshi',age: 189},
                 {name: 'mohan', surname : 'yaduvanshi',age: 215},
                 {name: 'madhav', surname : 'yaduvanshi',age: 225},
            ]
        db.collection('customers').insertMany(customers,function(error,result){
            if(error)
                 console.log(error.errmsg);
            else 
                console.log('many documents inserted...');
        });
    }
});

