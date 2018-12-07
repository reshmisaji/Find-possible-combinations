const {getResult} = require('./src/combinationsLibrary.js');

const main = function(args){
 console.log(getResult(args)) ;
}

main({num:process.argv[2],value:process.argv[3]});

