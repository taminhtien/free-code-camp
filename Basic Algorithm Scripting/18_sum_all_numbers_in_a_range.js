/* 
	We'll pass you an array of two numbers. Return the sum of those two numbers
	and all numbers between them.
	The lowest number will not always come first.
*/

function sumAll(arr) {
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  var newArr = [];
  for(i = min; i <= max; i++) {
   newArr.push(i);
  }
  var sum = (newArr).reduce(function(a, b) { return a + b; });
  return sum;
}

sumAll([1, 4]);