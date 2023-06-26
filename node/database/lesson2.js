var conection=require("./conection");

var sql="delete from student where id=2";

conection.con.query(sql,function(error,result)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("delete successful")
    }
})
conection.con.end();