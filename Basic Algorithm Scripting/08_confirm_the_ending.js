/*
	Check if a string (first argument) ends with the given target string (second argument).
*/

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(str.substr(str.length - target.length, str.length) === target)
    return true;
  else
    return false;
}

end('Bastian', 'n');