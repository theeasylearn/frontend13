var mysql = require("mysql");
var con = mysql.createConnection({
    host: 'localhost',
    database : 'frontend13',
    user: 'root',
    password: '',
    port: 3308
});
con.connect(function(error){
    if(error!=null)
        console.log(error);
    else 
        console.log('connection established.....');
});
module.exports.con = con;