/*
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  var strArr = str.split('');
  var arr = [];
  for(i = 0; i < strArr.length -1; i++) {
    if((strArr[i].toLowerCase() === strArr[i]) && (strArr[i + 1].toUpperCase() === str[i + 1])) {
      arr.push(strArr[i]);
      arr.push(' ');
      arr.push(strArr[i + 1].toLowerCase());
      i += 1;
    } else {
      arr.push(strArr[i]);
    }
  }
  arr.push(strArr[strArr.length - 1]);
  return arr.join('').toLowerCase().replace(/[_-\s]+/g, '-');
}

spinalCase('This Is Spinal Tap');