function descendingOrder(num){
  let strArray = String(num).split('');
  let strArraySorted = strArray.sort((first, second) => second - first);
  let descendingNum = Number(strArraySorted.join(''));
  return descendingNum;
}

console.log(descendingOrder(123456789));
