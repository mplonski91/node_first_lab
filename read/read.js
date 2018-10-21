const fs = require('fs')

fs.readFile('../file_text/third_file.txt', 'utf8', function(err, data){
    console.log(data)
})