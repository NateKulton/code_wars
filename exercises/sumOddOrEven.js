function oddOrEven(array) {
  let inintialValue = 0;
  let arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue,
  inintialValue,
  );

  if (arraySum % 2 === 0) {
      return 'even';
  } else {
      return 'odd';
  }
}

console.log(oddOrEven([1023, 1, 2])); // even

console.log(oddOrEven([1023, 1, 1])); // odd

/*
function oddOrEven(array) {
  let inintialValue = 0;

 for (let index = 0; index < array.length; index += 1) {
   inintialValue += array[index];
 }

  if (inintialValue % 2 === 0) {
      return 'even';
  } else {
      return 'odd';
  }
}

console.log(oddOrEven([1023, 1, 2])); // even

console.log(oddOrEven([1023, 1, 1])); // odd
*/

// The above commented out code shows how you can do the problem wiht a for loop instead of the reduce method
