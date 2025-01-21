function sumMix(arr) {
  let numArr = arr.map((value) => Number(value));
  let sum = 0;

    for (let index = 0; index < numArr.length; index += 1) {
      sum += numArr[index];
    }
    return sum;
  }

  console.log(sumMix([9, 3, '7', '3']));
