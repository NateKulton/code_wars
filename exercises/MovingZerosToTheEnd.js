function moveZeros(arr) {
  let firstHalf = arr.filter((item) => item !== 0);
  let secondHalf = arr.filter((item) => item === 0);

  return firstHalf.concat(secondHalf);
}



console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns [false,1,1,2,1,3,"a",0,0]
