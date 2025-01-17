function findShort(str) {
  let strArr = str.split(' ');
  let word = strArr[0];

  for (let index = 1; index < strArr.length; index += 1) {
      if (strArr[index].length < word.length) {
          word = strArr[index];
      }
  }
 return word.length;
}

console.log(findShort("turns out random test cases are easier than writing out basic ones"));
