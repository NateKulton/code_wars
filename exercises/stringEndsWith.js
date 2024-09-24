// string1 and string2 are passed to the function
// make string1 and same length as string2
// return if they are equal in length

// fun (str1, str2)
// make str1's length === str2
// check if they are equal, then return


function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false


// fun (str1, str2)
// turning the strings into arrays
// making the length of both arrays the same (I make need to use a method like slice or some thing to do this)
// (I am going to using substring to cut the string, and the length of the string)
// turn both arrays into strings and compare those strings and return if they are the same or not


function anotherWay(str, ending) {
  let startIndex = str.length - ending.length;
  let smallStr = str.substring(startIndex, str.length);
  return smallStr === ending;
}

console.log(anotherWay('abc', 'bc')); // returns true
console.log(anotherWay('abc', 'd')); // returns false
