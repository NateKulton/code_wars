function fakeBin(x) {
  let arrStrDigits = x.split('');
  let fakeBinaryArr = [];

    for (let index = 0; index < arrStrDigits.length; index += 1) {
      if (arrStrDigits[index] < '5') {
        fakeBinaryArr.push('0');
      } else if (arrStrDigits[index] >= '5') {
        fakeBinaryArr.push('1')
      }
    }
    return fakeBinaryArr.join('');
  }

  console.log(fakeBin('509321967506747'));
