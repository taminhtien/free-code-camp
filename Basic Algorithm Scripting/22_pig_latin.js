/*
  Translate the provided string to pig latin.
  Pig Latin takes the first consonant (or consonant cluster) of an English word,
  moves it to the end of the word and suffixes an "ay".
  If a word begins with a vowel you just add "way" to the end.
*/

function isConsonant(c) {
  if(c === 'u' || c === 'e' || c === 'o' || c === 'a' || c === 'i') {
    return true;
  } else {
    return false;
  }
}
function translate(str) {
  var pigLatinArr = [];
  for(i = 0; i < str.length; i++) {
    if(isConsonant(str[i])) {
      var part1 = str.substr(0, i);
      var part2 = str.substr(i);
      pigLatinArr.push(part2);
      pigLatinArr.push(part1);
      if(isConsonant(str[0])) {
        pigLatinArr.push("way");
      } else {
        pigLatinArr.push("ay");
      }
      return pigLatinArr.join('');
    }
  }
  return str;
}

translate("consonant");
