/*............Generate Cycler............*/

const generateCycler = function(times){
  let operators = [ "+", "-", "*", "/", "" ];
  let index = 0;
  return function(){
    return operators[(Math.floor((index ++) / times)) % operators.length];
  }
}

/*.............Get Array..............*/

const getArray = function(length){
  return new Array(length).fill("").map(x=>[]);
}

/*............Generate Operator Combinations ...........*/

const generateOperaterCombinations = function(combinationLength){
  let operatorCombinations = getArray(Math.pow(5,combinationLength));

  for(let column=0; column<combinationLength; column++){
    let cycle = generateCycler(Math.pow(5,column));

    for(let row = 0; row < Math.pow(5, combinationLength); row++) {
      operatorCombinations[row][column] = cycle();
    }
  }
  return operatorCombinations;
}

/*............Get All Combinations...............*/

const getAllCombination = function( number, numberToCheck ){
  let oprantCombo = generateOperaterCombinations( number.length-1 );
  let digits = number.split("");
  let combine = addOperators( digits );
  return oprantCombo.map(combine);
}

/*..............Get Result...........*/

const getResult = function( args ){
  let number = args.num;
  let numberToCheck = args.value;
  let combos = getAllCombination( number, numberToCheck );
  return combos.filter(x=>eval(x)==numberToCheck);
}

/*............Add Operators...........*/

const addOperators = function( numbers ){
  return function( operators ){
    let index = 0;
    operators.push("");
    return numbers.map(x=>x+operators[index++]).join("");
  }
}

module.exports = {getResult};
