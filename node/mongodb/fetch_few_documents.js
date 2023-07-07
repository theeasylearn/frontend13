var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var DatabaseURL = "mongodb://localhost:27017/frontend13";
MongoClient.connect(DatabaseURL,function(error,database){
    if(error)
        console.log(error.errmsg);
    else 
    {
        var db = database.db('frontend13');
        var condition = {surname: 'yaduvanshi'}; 
        var fields = {_id:0,age:0};  //these fields will be skiped
        db.collection('customers').find(condition,{projection : fields}).toArray(function(error,result){
            if(error)
                console.log(error.errmsg);
            else 
                console.log(result);
            database.close();
        });
    }
});
