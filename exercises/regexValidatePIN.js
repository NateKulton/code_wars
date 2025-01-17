function validatePIN(pin) {
  let numRegex = /[^0-9]/g;
  let numStr = pin.match(numRegex);
  return !!numStr === false && (pin.length === 4 || pin.length === 6);
}


/*
function validatePIN(pin) {
  let numRegex = /[^0-9]/g;
  let numStr = pin.match(numRegex);

  if (!!numStr === true) {
    return false;
  } else if (pin.length === 4 || pin.length === 6) {
    return true;
  } else {
    return false;
  }
}
*/

