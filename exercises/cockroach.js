// fun (kilometersPerHour):
// kilometersPerSecond = kilometersPerHour / 60 / 60;
// centimetersPerSecond = kilometersPerSecond * 100000;
// end fun:

function cockroachSpeed(kilometersPerhour) {
  let kilometersPerSecond = kilometersPerhour / 60 / 60;
  let centimetersPerSecond = kilometersPerSecond * 100000;
  return Math.floor(centimetersPerSecond);
}

console.log(cockroachSpeed(1.08));
