// Declaration our modules
const os = require('os')
<<<<<<< Updated upstream
const fs = require('fs')
=======
const myMath = require('./myMath')
>>>>>>> Stashed changes

// Show first string (Hello World)
if(process.argv[2]){
    console.log('Hello ' + process.argv[2] + '!')
}else{
    console.log('Hello World!')
}

// Get username
const userName = os.userInfo().username

// Check our user
console.log(userName)
