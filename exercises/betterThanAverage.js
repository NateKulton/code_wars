// fun (arr, score):
// loop through arr and add all those numbers together as new variable (sum)
// score (true) > sum of arr (false).
// end of fun:


function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce(
    (sumOfClassPoints, currentValue) => sumOfClassPoints + currentValue,
    0,
  );

  let averageScore = sum / classPoints.length;

  return yourPoints > averageScore;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
