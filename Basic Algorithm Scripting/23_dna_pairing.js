/*
  The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.
  Base pairs are a pair of AT and CG. Match the missing element to the provided character.
  Return the provided character as the first element in each array.
*/

function pair(str) {
  var output = [];
  var strArr = str.split('');
  strArr.forEach(function(entry) {
    switch(entry) {
      case 'G': output.push([entry, 'C']); break;
      case 'C': output.push([entry, 'G']); break;
      case 'T': output.push([entry, 'A']); break;
      case 'A': output.push([entry, 'T']); break;
    }
  });
  
 return output;
}

pair("GCG");