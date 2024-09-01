// String Method
// charAt
// exe 1
let fName = "Madhu";
console.log(fName.charAt(1));

// exe 2
let char = "Hello";
function getFirst(str) {
  return str.charAt(0);
}
console.log(getFirst(char));

// exe 3
let char2 = "World";
function getLast(string) {
  return string.charAt(string.length - 1);
}
console.log(getLast(char2));

// toLowerCase
// exe 1
function toLower(str) {
  return str.toLowerCase();
}
console.log(toLower("HELLO WORLD"));

// exe 2
function equal(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(equal("Hello", "hello")); //true
console.log(equal("Hello", "world")); //false

// sunstring
// exe 1
function sub(string) {
  return string.substring(0, 5);
}
console.log(sub("Hello there"));

// exe 2
function trim(str) {
  return str.substring(1, str.length - 1);
}
console.log(trim("JavaScript"));

// join
let words = ["Hello", "world"];
let res = words.join(" ");
console.log(res);

// split
let fullName = "Madhumitha Venkatesan";
let name = fullName.split(" ");
let firstName = name[0];
let lastName = name[1];
console.log("My first name is " + firstName + " My Last name is " + lastName);

// replace
let userName = "Madhu123";
let replaceName = userName.replace("Madhu123", "Madhumitha");
console.log(replaceName);

// startWith
function checkStart(str, prefix) {
  return str.startsWith(prefix);
}
console.log(checkStart("Hello world", "Hello"));
console.log(checkStart("Hello world", "world"));

// endsWith
function endsWith(str, suffix) {
  return str.endsWith(suffix);
}
console.log(endsWith("Hello world", "Hello"));
console.log(endsWith("Hello world", "world"));

// trim
let msg = "     Hello      ";
console.log(msg.trim());

// trimStart
console.log(msg.trimStart());

// trimEnd
console.log(msg.trimEnd());
