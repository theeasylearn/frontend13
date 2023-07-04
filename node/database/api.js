var express = require("express");
var connection = require("./connection");
var bodyParser = require('body-parser');
var app = express();
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());


// purpose = add to cart
// url = localhost:5000/cart
// method = post
// input = productid,userid,price (all required)

app.post("/cart", function (request, response) {
    let productid = request.body.productid;
    let userid = request.body.userid;
    let price = request.body.price;

    if (productid === undefined || userid === undefined || price === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = `select id from cart where productid=${productid} and usersid=${userid} and billid=0`;
        connection.con.query(sql, function (error, result, fields) {
            if (error != null) 
            {
                response.json([{ 'error': 'error occured' }]);
            }
            else 
            {
                let size = result.length;
                let sql, message;
                if (size === 0) 
                {
                    sql = `insert into cart (productid,usersid,price,billid,quantity) values (${productid},${userid},${price},0,1)`;
                    message = 'Product added into cart';
                }
                else 
                {
                    sql = `update cart set quantity=quantity+1 where productid=${productid} and usersid=${userid} and billid=0`;
                    message = 'Cart updated';
                }
                connection.con.query(sql, function (error, result) {
                    if (error != null) {
                        response.json([{ 'error': 'error occured' }]);
                    }
                    else {
                        response.json([{ 'error': 'no' }, { 'message': message }]);
                    }
                });
            }
        });
    }
});

// delete from cart
// url = localhost:5000/cart
// method = delete
// input = id (all required)

app.delete("/cart", function (request, response) {
    var id = request.body.id;
    if( id === undefined)
        response.json([{ 'error': 'input is missing' }]);
    else 
    {
        let sql = `delete from cart where id=${id}`;
        connection.con.query(sql,function(error,result){
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else 
            {
                response.json([{ 'error': 'no' }, { 'message': 'Product deleted from cart' }]);
            }
        });
    }
});

//update cart
// url = localhost:5000/cart
// method = put
// input = id,quantity (all required)
app.put("/cart", function (request, response) {

});

//fetch items from cart
app.get("/cart/:userid", function (request, response) {
    let userid = request.params.userid;
    if( userid === undefined)
        response.json([{ 'error': 'input is missing' }]);
    else 
    {
        let sql = `select * from cart where usersid=${userid}`;
        connection.con.query(sql,function(error,result,fields){
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else 
            {
                var output_as_json = JSON.parse(JSON.stringify(result));
                output_as_json.splice(0,0,{'error':'no'});
                output_as_json.splice(1,0,{'total':result.length});
                response.send(output_as_json);
            }
        });
    }
});
app.listen(5000);
console.log('ready to accept request');