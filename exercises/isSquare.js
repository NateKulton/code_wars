let isSquare = function(num){
  let squareRootNum = Math.sqrt(num);
  if (squareRootNum !== Math.floor(squareRootNum)) {
    return false;
  } else {
    return true;
  }
}

// Below is just showing how you can do this without an if statement

/*
let isSquare = function(num){
  let squareRootNum = Math.sqrt(num);
  return squareRootNum === Math.floor(squareRootNum) ? true : false;
}
*/

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
