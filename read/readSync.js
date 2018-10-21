const fs = require('fs')

fs.readFileSync('../file_text/first_file.txt', function(err, data){
    console.log(data)
})