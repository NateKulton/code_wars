function reverseWords(str) {
  let lettersArr = str.split('');
  let reversedString = lettersArr.reverse().join('');
  let reversedStringArr = reversedString.split(' ');
  let reversedWords = reversedStringArr.reverse().join(' ');
  return reversedWords;
}

console.log(reverseWords("This is an example!"));
