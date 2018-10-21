// Declaration our modules
const os = require('os')
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const fs = require('fs')
<<<<<<< HEAD
=======
=======
>>>>>>> Stashed changes
const myMath = require('./myMath')
>>>>>>> Stashed changes
=======
const myMath = require('./myMath')
>>>>>>> 5aef022307911e3163407f896d05f2ee0b8cd664

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

// Functions on other files
myMath.sumFunction(5, 4)
myMath.differentiaFunction(9, 5)
console.log(myMath.pi)
