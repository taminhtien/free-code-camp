/*
  Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe),
  in a string to their corresponding HTML entities.
*/

function convert(str) {
  var strArr = str.split('');
  strArr.forEach(function(item) {
    switch(item) {
      case "&": strArr[strArr.indexOf(item)] = "&amp;"; break;   
      case "<": strArr[strArr.indexOf(item)] = "&lt;"; break;   
      case ">": strArr[strArr.indexOf(item)] = "&gt;"; break;   
      case "'": strArr[strArr.indexOf(item)] = "&apos;"; break;   
      case '"': strArr[strArr.indexOf(item)] = "&quot;"; break;   
    }
  });
  return strArr.join('');
}

convert('Dolce & Gabbana');
