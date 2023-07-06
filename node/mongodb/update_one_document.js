var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var DatabaseURL = "mongodb://localhost:27017/frontend13";
MongoClient.connect(DatabaseURL,function(error,database){
    if(error)
        console.log(error.errmsg);
    else 
    {
        var db = database.db('frontend13');
        var condition = {'name':'Ram'};
        var NewValue = {$set : {'name':'siya ke ram','age':250,'married':true}};
        db.collection('customers').updateOne(condition,NewValue,function(error,result){
            if(error)
                console.log(error.errmsg);
            else 
            {
                console.log('document updated...');
                database.close();
            }
        })
    }
});
