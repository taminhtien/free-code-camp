function findLongestWord(str) {
  var arrWords = str.split(/\W+/g);
  var longestIndex = 0;
  for(i = 1; i < arrWords.length; i++) {
    if(arrWords[i].length > arrWords[longestIndex].length) {
      longestIndex = i;
    }
  }
  return arrWords[longestIndex].length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');