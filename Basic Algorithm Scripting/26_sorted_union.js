/*
	Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
	In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
	The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function unite(arr1, arr2, arr3) {
  return arr1.concat(arr2.filter(function(item) {
    return arr1.indexOf(item) < 0;
  }).concat(arr3.filter(function(item) {
    return arr1.indexOf(item) < 0;
  })));
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);