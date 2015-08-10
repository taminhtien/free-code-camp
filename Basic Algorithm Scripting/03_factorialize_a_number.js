function factorialize(num) {
  var factory = 1;
  for(i = 2; i <= num; i++) {
    factory *= i;
  }
    
  return factory;
}

factorialize(5);