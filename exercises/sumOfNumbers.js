function getSum(a, b) {
  if (a === b) {
   return a
 }

   let sumOfNums = 0;
   let smallerNum;
   let greaterNum;


   if (a < b) {
     smallerNum = a;
     greaterNum = b;
   } else if (b < a) {
     smallerNum = b;
     greaterNum = a;
   }

   for (let index = smallerNum; index <= greaterNum; index += 1) {
     sumOfNums += index;
   }
   return sumOfNums;
 }

 console.log(getSum(1, 0)); // 1
 console.log(getSum(1, 2)); // 3
 console.log(getSum(0, 1)); // 1
 console.log(getSum(1, 1)); // 1 (1 since both are same)
 console.log(getSum(-1, 0)); // -1
 console.log(getSum(-1, 2)); // 2
