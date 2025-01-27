function squareSum(numbers) {
  let sum = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index] ** 2;
  }
  return sum;
}

console.log(squareSum([1, 2, 2])); // 9
