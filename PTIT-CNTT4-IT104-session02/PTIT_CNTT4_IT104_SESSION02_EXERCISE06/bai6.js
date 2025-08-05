function  checkEndString (longString, shortString) {
  return longString.endsWith(shortString);
}
console.log(checkEndString('JavaScript', 'Script')); 
console.log(checkEndString('hello world', 'world'));
console.log(checkEndString('hello world', 'hello')); 