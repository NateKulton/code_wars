function countSheeps(sheep) {
  let index = 0;
  let count = 0;

while (index < sheep.length) {
   if (!!sheep[index] === true) {
     count += 1;
 }
 index += 1;
}
return count;
}

console.log(countSheeps([true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true]));
