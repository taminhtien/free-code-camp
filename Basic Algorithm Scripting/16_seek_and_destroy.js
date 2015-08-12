/*
	You will be provided with an initial array (the first argument in the destroyer function),
	followed by one or more arguments. Remove all elements from the initial array
	that are of the same value as these arguments.
*/

// Use bind to pass arguments to callback function
function duplicated(eliminations, value) {
  return eliminations.indexOf(value) != -1 ? false : true;
}

function destroyer(arr) {
  var eliminations = [];
  for(i = 1; i < arguments.length; i++) {
    eliminations.push(arguments[i]);
  }
  var filtered = arr.filter(duplicated.bind(this, eliminations));
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
