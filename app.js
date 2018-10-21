// Declaration our modules
const os = require('os')
const fs = require('fs')
const myMath = require('./myMath')

// Show first string (Hello World)
console.log('Hello World')

// Get username
const userName = os.userInfo().username

// Check our user
console.log(userName)

// Functions on other files
myMath.sumFunction(5, 4)
myMath.differentiaFunction(9, 5)
console.log(myMath.pi)
