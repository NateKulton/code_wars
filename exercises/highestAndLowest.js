// fun (str):
// set variable = lowestStringNumber
// set variable = highestStringNumber
// return lowestStringNumber + ' ' + highestStringNumber;
// end fun:

function highAndLow(numbersString) {
  let strNumArr = numbersString.split(' ');
  let numArr = strNumArr.map((strNum) => Number(strNum));
  let highestStringNumber = numArr[0];
  let lowestStringNumber = numArr[0];

  for (let index = 1; index < numArr.length; index += 1 ) {
    if (numArr[index] > highestStringNumber) {
      highestStringNumber = numArr[index];
    } else if (numArr[index] < lowestStringNumber) {
      lowestStringNumber = numArr[index];
    }
  }
  return highestStringNumber + ' ' + lowestStringNumber;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// This is a shorter version of the same code

/*
function highAndLow(numbersString) {
  let strNumArr = numbersString.split(' ');
  let numArr = strNumArr.map((strNum) => Number(strNum));

  return Math.max(...numArr) + ' ' + Math.min(...numArr);
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
*/
