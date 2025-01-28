function openOrSenior(data) {
  let membershipList = [];

  for (let index = 0; index < data.length; index += 1) {
    let age = data[index][0];
    let handicapLevel = data[index][1];

    if (age >= 55 && handicapLevel > 7) {
      membershipList.push('Senior');
    } else {
      membershipList.push('Open');
    }
  }
  return membershipList;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
