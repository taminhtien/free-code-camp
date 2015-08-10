/*
	Repeat a given string (first argument) n times (second argument).
	Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  // repeat after me
  var strRepeat = '';
  if(num > 0) {
    for(i = 0; i < num; i++)
      strRepeat += str;
    return strRepeat;
  } 
  else {
    return '';
  }
}

repeat('abc', 3);