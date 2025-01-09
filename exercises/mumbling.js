function accum(str) {
  let lettersArr = str.toLowerCase().split('');

  for (let index = 0; index < str.length; index += 1) {
    lettersArr[index] = lettersArr[index].toUpperCase([0]).concat(lettersArr[index].repeat(index));
  }
 return lettersArr.join('-');
}

console.log(accum("abcd"));
console.log(accum("cwAt"));
