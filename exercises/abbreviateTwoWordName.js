function abbrevName(name) {
  let nameList = name.split(' ');
  let firstLetter = nameList[0][0].toUpperCase();
  let secondLetter = nameList[1][0].toUpperCase();
  return firstLetter + '.' + secondLetter;
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));
