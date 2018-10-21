const os = require('os')
const fs = require('fs')

const userName = os.userInfo().username
fs.writeFile('../file_text/first_file.txt', userName, function(){})