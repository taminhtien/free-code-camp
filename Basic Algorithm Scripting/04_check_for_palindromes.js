function palindrome(str) {
  // Good luck!
  var strRemovePunctuation = str.replace(/\W+/g, '');
  var strReformat = strRemovePunctuation.toLowerCase().split('').join('');
  var strReverse = strRemovePunctuation.toLowerCase().split('').reverse().join('');
  if (strReverse === strReformat)
    return true;
  else
    return false;
}

palindrome("eye");