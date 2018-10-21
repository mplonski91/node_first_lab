const piNumber = 3.14 

module.exports.sumFunction = function(a, b){
    const sum = a + b
    console.log('Suma wynosi: ' + sum)
}

module.exports.differentiaFunction = function(a, b){
    const differential = a - b 
    console.log('Roznica wynosi: ' + differential)
}

module.exports.pi = piNumber
