function titleCase(str) {
  var arrWords = str.toLowerCase().split(/\s+/g);
  for(i = 0; i < arrWords.length; i++) {
    arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].substr(1);
  }
  return arrWords.join(' ');
}

titleCase("I'm a little tea pot");