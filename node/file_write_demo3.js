var fs = require("fs");
var FileName = "vegitables.txt";
var FileContent = "\n ladyfinger cabbage sweet potato";
var encoding = 'utf-8';
//append data into file snchronously
fs.appendFileSync(FileName,FileContent,encoding);
console.log('File create/updated successfully');