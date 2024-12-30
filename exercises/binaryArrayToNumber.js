const binaryArrayToNumber = arr => {
  if (arr.length > 0) {
    return parseInt(arr.join(''), 2);
  }
  return 0;
};


console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([1, 0, 1, 1]));
