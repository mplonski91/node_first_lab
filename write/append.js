const os = require('os')
const fs = require('fs')

const userName = os.userInfo().username

fs.appendFile('../file_text/third_file.txt', 'Test Message', 'utf8', function(){})