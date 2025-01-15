function bmi(weight, height) {
  let bodySize = weight / (height ** 2);

    if (bodySize <= 18.5) {
      return  "Underweight";
    } else if (bodySize <= 25.0) {
      return "Normal";
    } else if (bodySize <= 30.0) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  console.log(bmi(50, 1.80));
  console.log(bmi(80, 1.80))
  console.log(bmi(90, 1.80))
  console.log(bmi(100, 1.80))
