const os = require('os')
const fs = require('fs')

const userName = os.userInfo().username

fs.writeFileSync('../file_text/Second_file.txt', userName, function(){})