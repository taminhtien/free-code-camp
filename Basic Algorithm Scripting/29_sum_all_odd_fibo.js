/*
  Return sum of all odd fibonacci numbers up to and including the passed number
  if it is a Fibonacci number
*/

function fibo(num) {
  if(num == 0) {
    return 0;
  }
  if(num == 1) {
    return 1;
  }
  return fibo(num - 1) + fibo(num - 2);
}

function sumFibs(num) {
  var sum = 0;
  for(i = 0; i <= num; i++) {
    var f = fibo(i);
    if(f % 2 !== 0) {
      sum += f;
    }
  }
  return sum;
}

sumFibs(4);
