var conection = require("./conection");
var sql="insert into student (name,gender,dob,email,mobile,photo) value ('sahil ',1,'1987-07-07','sahil@gmail.com','8574962514','https://picsume.photo/200')";

conection.con.query(sql,function(error,result)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("student added successful")
    }
});

conection.con.end();
