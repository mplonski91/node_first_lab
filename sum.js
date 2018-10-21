const myMath = require('./myMath')

const testArray = []
process.argv.forEach( function(val, index) {
   if(val >= 2){
       testArray.push(val)
   }
})

const firstArg = parseInt(testArray[0])
const secondArg = parseInt(testArray[1])

myMath.sumFunction(firstArg, secondArg)
