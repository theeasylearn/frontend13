var fs = require("fs");
var FileName = "grains.txt";
var FileContent = "\n millet sorghum";
var encoding = 'utf-8';
//write data into file snchronously
fs.writeFileSync(FileName,FileContent,encoding);
console.log('File create/updated successfully');