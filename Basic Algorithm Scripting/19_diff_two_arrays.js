/*
	Compare two arrays and return a new array with any items not found in both of the original arrays.
*/

function callback(array, value) {
  return array.indexOf(value) != -1 ? false : true;
}

function diff(arr1, arr2) {
  var filteredArr1 = arr1.filter(callback.bind(this, arr2));
  var filteredArr2 = arr2.filter(callback.bind(this, arr1));
  Array.prototype.push.apply(filteredArr1, filteredArr2);
  return filteredArr1;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);