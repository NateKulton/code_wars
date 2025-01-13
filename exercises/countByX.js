function countBy(x, n) {
  let z = [];
  for (let index = 1; index <= n; index += 1) {
    z.push(x * index);
  }

  return z;
}

console.log(countBy(1,10));
console.log(countBy(2,5));


/*
fun (x, n)
set bucketArr;
set index = 1;

while (index < n)
bucketArr.push(x * index)
index += 1;


return bucketArr
end fun:
*/
