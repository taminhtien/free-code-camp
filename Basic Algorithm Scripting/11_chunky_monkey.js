/*
	Write a function that splits an array (first argument)
	into groups the length of size (second argument)
	and returns them as a multidimensional array.
*/

function chunk(arr, size) {
  // Break it up.
  var arr2D = [];
  var arrSize = arr.length / size;
  for(i = 0; i < arrSize; i++) {
    arr2D[i] = [];
  }
  var k = 0;
  for(i = 0; i < arr.length; i++) {
    arr2D[k].push(arr[i]);
    console.log(arr2D[k]);
    if(arr2D[k].length === size) {
      k++;
    }
  }
  return arr2D;
}

chunk(['a', 'b', 'c', 'd'], 2);
