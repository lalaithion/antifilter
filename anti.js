var invisible = [
  '\u180E',
  '\u200A',
  '\u200B',
  '\u200C',
  '\u200D',
  '\u2060',
  '\u2063',
]

function interleave(string) {
  if (string == undefined) {
    return ""
  }
  
  var result = "";
  for (var i = 0; i < string.length; i++) {
    result += string[i];
    result += invisible[Math.floor(Math.random() * invisible.length)];
  }
  return result;
}
