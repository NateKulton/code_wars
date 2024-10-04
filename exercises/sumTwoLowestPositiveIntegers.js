// fun (arr):
// set lowestNumber
// find index of lowestNumber
// use index to remove lowest number from the array
// set secondLowestNumber
// add both nums together and return the sum of that
// end fun:

function sumTwoSmallestNumbers(numbers) {
  let lowestNumber = Math.min(...numbers);
  let indexOfLowestNumber = numbers.indexOf(lowestNumber);
  numbers.splice(indexOfLowestNumber, 1);
  let secondLowestNumber = Math.min(...numbers);
  return lowestNumber + secondLowestNumber;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
