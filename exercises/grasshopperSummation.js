let summation = function(endNum) {
  let sum = 0;

  for (let index = 0; index <= endNum; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(summation(2));
console.log(summation(8));

