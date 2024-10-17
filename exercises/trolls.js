// fun (str):
// iterarte through string
// if letter === value
// remove that letter
// return edittedString;
// end fun:


function disemvowel(str) {
  let removeVowels = /[^aeiou]/gi;
  let censoredPhrase = str.match(removeVowels);
  return censoredPhrase.join('');
}

console.log(disemvowel("This website is for losers LOL!"));
