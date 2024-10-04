// fun (str):
// loop through array
// increment a number for the number of O's in the string
// increment a number for the number of X's in the string
// do nothing for characters that aren't X or O;
// return if both incremented numbers are the same;
// fun end:

function XO(str) {
  let lowerCaseStr = str.toLowerCase();
  let countOfOs = 0;
  let countOfXs = 0;

  for (let index = 0; index < str.length; index += 1) {
    if (lowerCaseStr[index] === 'o') {
      countOfOs += 1;
    } else if (lowerCaseStr[index] === 'x') {
      countOfXs += 1;
    }
  }
  return countOfOs === countOfXs;
}

console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
