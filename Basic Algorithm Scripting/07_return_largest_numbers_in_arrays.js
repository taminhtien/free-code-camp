/*
  Return an array consisting of the largest number from each provided sub-array.
  For simplicity, the provided array will contain exactly 4 sub-arrays. 
*/

function largestOfFour(arr) {
  // You can do this!
  var maxNumber = arr[0][0];
  var maxArr = [];
  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > maxNumber) {
        maxNumber = arr[i][j];
      }  
    }
    maxArr[i] = maxNumber;
  }
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);