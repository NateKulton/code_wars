function addBinary(num1, num2) {
  let numSum = num1 + num2;
  let binaryNum = numSum.toString(2);
  return binaryNum;
}

console.log(addBinary(1, 1));
console.log(addBinary(5, 9));
