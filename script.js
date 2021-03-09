// this function shows a greeting
function showGreeting(text) {
    console.log('Hello', + text)
}
showGreeting('human')

// require function applying the fs and path methods
var fs = require('fs')
var path = require('path')

var filePath = path.resolve('textFile.txt')

fs.writeFile(filePath, 'I wrote a file', function (error) {
    if (error) {
        console.error(error)
    } else {
        console.log('File Written')
    }
})