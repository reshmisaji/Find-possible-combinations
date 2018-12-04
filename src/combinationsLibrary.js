const generateCycler = function(times){
  let operators = [ "+", "-", "*", "/", "" ];
  let index = 0;
  return function(){
    return operators[(Math.floor((index ++) / times)) % operators.length];
  }
}

