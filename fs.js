const fs = require('fs')

fs.writeFileSync('first.txt', "This is my first file")

fs.writeFile('second.txt', "This is my second file", ()=>{

})

fs.appendFileSync('first.txt', "\nWe are learning fs - module")


fs.copyFileSync('first.txt','third.txt')

fs.renameSync("third.txt",'new.txt')

var result = fs.readFileSync('first.txt')
// console.log(result.toString());

fs.unlinkSync('second.txt')

fs.mkdirSync("images")

fs.writeFileSync('images/newFile.txt',"test")

fs.rmdirSync("images")