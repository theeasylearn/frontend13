//user defined function 
//function function-name()
//with return value  without argument 
function pi()
{
    return 3.1415;
}
//with return value and with argument 
function $(id)
{
    return document.getElementById(id);
}
//without return value with argument function
function html(id,message)
{
    $(id).innerHTML += message;
}
//without return value without argument function 