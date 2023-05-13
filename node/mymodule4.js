var date = new Date();
module.exports.getDay = function(){
    let day = date.getDate(); //return day of month
    return day;
}

module.exports.getMonth = function(){
    let month = date.getMonth() + 1;
    return month;
}

module.exports.getYear = function(){
    let year = date.getFullYear();
    return year;
}
