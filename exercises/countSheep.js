function countSheep(num) {
  let index = 1;
  let text = '';

  while (index <= num) {
   text += `${index} sheep...`;
   index += 1;
 }
  return text;
}

countSheep(4);
