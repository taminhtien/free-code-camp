/*
	Return true if the string in the first element of the array
	contains all of the letters of the string in the second element of the array.
*/

function mutation(arr) {
  arr[0] = arr[0].toString().toLowerCase().split('');
  arr[1] = arr[1].toString().toLowerCase().split('');
  for(i = 0; i < arr[1].length; i++) {
   if(arr[0].indexOf(arr[1][i]) == -1) {
     return false;
   }
  }
  return true;
}

mutation(['hello', 'hey']);