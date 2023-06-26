var conection=require("./conection")

sql="update student set name='meet' ,email='meet@gmail.com' where id=3";

conection.con.query(sql,function(error,result)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("updated successful")
    }
});
conection.con.end();