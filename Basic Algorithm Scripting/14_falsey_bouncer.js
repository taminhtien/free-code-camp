/*
  Remove all falsey values from an array.
  Falsey values in javascript are false, null, 0, "", undefined, and NaN.
*/

function isNotFalse(value) {
  // check for truthiness, note that this is not equal with == true
  if(value) {
    return true;
  }
  else {
    return false;
  }
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered =  arr.filter(isNotFalse);
  return filtered;
}

bouncer([7, 'ate', '', false, 9]);