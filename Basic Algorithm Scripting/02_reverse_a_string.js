function reverseString(str) {
  // str.split return an array
  // .reverse and .join are methods for array
  var strReverse = str.split('').reverse().join('');
  return strReverse;
}

reverseString('hello');
