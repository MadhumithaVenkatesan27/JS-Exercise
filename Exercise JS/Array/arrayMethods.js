// Creating a array
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// Array Length
console.log(fruits.length);

// push
fruits.push("Kiwi");
console.log(fruits);

// Unshift
fruits.unshift("Grape");
console.log(fruits);

// pop
let colors = ["Red", "white", "black", "Pink"];
colors.pop();
console.log(colors);

// shift
colors.shift();
console.log(colors);

// at
let letters = ["A", "B", "C", "D"];
console.log(letters.at(1));

// index of
console.log(letters.indexOf("C"));

// includes
console.log(letters.includes("A"));

// map
// exe 1
let words = ["apple", "orange", "manago"];
let upperCase = words.map((word) => word.toUpperCase());
console.log(upperCase);

// exe 2
let numbers = [1, 2, 3, 4, 5];
let square = numbers.map((num) => num * num);
console.log(square);

// exe 3
let people = [
  { uName: "Alice", age: 25 },
  { uName: "Bob", age: 30 },
  { uName: "Charlie", age: 35 },
];
let result = people.map((person) => person.uName);
console.log(result);

// exe 4
let objects = [{ value: 10 }, { value: 20 }, { value: 30 }];
let mul = objects.map((multiply) => multiply.value * 2);
console.log(mul);

// filter
// exe 1
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = number.filter((evenNum) => evenNum % 2 === 0);
console.log(even);

// exe 2
let userName = ["Madhu", "Yogesh", "Vani", "Venkatesan"];
let resultOfName = userName.filter((output) => output.length > 5);
console.log(resultOfName);

// exe 3
let mixedArray = [0, 1, 2, false, "", null, "hello", undefined, NaN];
let filterdArray = mixedArray.filter(Boolean);
console.log(filterdArray);

// exe 4
let items = [
  { name: "item1", price: 30 },
  { name: "item2", price: 60 },
  { name: "item3", price: 90 },
];
let filter = items.filter((item) => item.price > 50);
console.log(filter);

//  every
// exe 1
let input = [1, 2, 3, 4, 5];
let checkNum = input.every((check) => check > 0);
console.log(checkNum);

// exe 2
let string = ["apple", "banana", "cherry", ""];
let nonEmpty = string.every((str) => str.length > 0);
console.log(nonEmpty);

// exe 3
let elements = [1, 2, 3, 4, 5];
let isNum = elements.every((num) => typeof num === "number");
console.log(isNum);

// exe 4
let positive = [10, 20, 30, 40];
let isPositive = positive.every((check) => check > 0);
console.log(isPositive);

// exe 5
let peoples = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 18 },
];
let check = peoples.every((person) => person.age > 18);
console.log(check);

// exe 6
let numberEven = [2, 4, 6, 8];
let checkEven = numberEven.every((evenNumber) => evenNumber % 2 === 0);
console.log(checkEven);

// some
// exe 1
let checkNumber = [3, 7, -2, 5, 9];
let res = checkNumber.some((negative) => negative < 0);
console.log(res);

// exe 2
let peopleAge = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 17 },
];
let checkAge = peopleAge.some((personAge) => personAge.age < 18);
console.log(checkAge);

// fill
// exe 1
let arr1 = new Array(5).fill(0);
console.log(arr1);

// exe 2
let arr2 = [1, 2, 3, 4];
console.log(arr2.fill(9, 1, 3));

// exe 3
let arr3 = new Array(4).fill("a");
console.log(arr3);

// reduce
// exe 1
let reduceNumbers = [10, 20, 30, 40];
let sum = reduceNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

// exe 2
let maxNum = [3, 7, 2, 9, 4];
function findMax(arr) {
  return arr.reduce(
    (max, currentValue) => (currentValue > max ? currentValue : max),
    arr[0]
  );
}
console.log(findMax(maxNum));

// concat
// exe 1
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = num1.concat(num2);
console.log(num3);

// exe 2
let list1 = ["a", "b"];
let list2 = ["c", "d"];
let list3 = ["e", "f"];
let list = list1.concat(list2).concat(list3);
console.log(list);
// using spread operator
function concatMultiple(list1, list2, list3) {
  return [...list1, ...list2, ...list3];
}
console.log(concatMultiple(list1, list2, list3));

// exe 3
let array1 = [10, 20, 30];
let val1 = 40;
let val2 = 50;
function concatValue(array, ...values) {
  return [...array, ...values];
}
console.log(concatValue(array1, val1, val2));

// reverse
// exe 1
let reverseNum = [1, 2, 3];
let resultReverse = reverseNum.reverse();
console.log(resultReverse);

// exe 2
let strings = ["Apple", "Banana", "Cherry"];
let reversestr = strings.reverse();
console.log(reversestr);

// exe 3
let numList = [10, 20, 30, 40];
function reverseNumber(num) {
  num.reverse();
}
reverseNumber(numList);
console.log(numList);

// sort
// exe 1
let fruitsName = ["banana", "apple", "grape"];
let sortName = fruitsName.sort();
console.log(sortName);

// exe 2
let sortNum = [12, 45, 23, 78, 56];
function sorting(arr) {
  return arr.slice().sort((a, b) => b - a);
}
console.log(sorting(sortNum));

// exe 3
let peopleSorting = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "charlie", age: 35 },
];
function ageSorting(array) {
  return array.slice().sort((a, b) => a.age - b.age);
}
console.log(ageSorting(peopleSorting));

// join
// exe 1
let joinFruits = ["Apple", "Banana", "Cherry"];
console.log(joinFruits.join());

// exe 2
let joinWords = ["Javascript", "is", "fun"];
console.log(joinWords.join("-")); //Join with -

// exe 3
let sentence = ["Hello", "world!", "How", "are", "you?"];
console.log(sentence.join(" ")); //Join with space

// exe 4
let chars = ["M", "a", "d", "h", "u"];
console.log(chars.join(""));

// flat
// exe 1
let nestedArray = [1, [2, 3], [4, 5]];
console.log(nestedArray.flat());

// exe 2
let deepNestedArray = [1, [2, [3, [4, [5]]]]];
function flaten(arr) {
  return arr.flat(Infinity);
}
console.log(flaten(deepNestedArray));

// find
// exe 1
let findNumber = [5, 12, 50, 130, 44];
let findOutput = findNumber.find((num) => num > 10);
console.log(findOutput);

// exe 2
let findNumbers = [1, 3, 5, 8];
let checkEvenNumbers = findNumbers.find((checkFind) => checkFind % 2 == 0);
console.log(checkEvenNumbers);

// exe 3
let strFind = ["short", "medium", "thisIsLong", "veryVeryLong"];

function findStr(arr) {
  return arr.find((str) => str.length > 5);
}

console.log(findStr(strFind));

// findIndex
let student = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];
let toFind = 102;
function findStudent(arr, id) {
  return arr.findIndex((student) => student.id === id);
}
console.log(findStudent(student, toFind));

// toString
// exe 1
let array = [1, 2, 3];
function str(arr) {
  return arr.toString();
}
console.log(str(array));

// exe 2
let arrayList = ["apple", "banana", "cherry"];
function stringList(array) {
  return array.toString();
}
console.log(stringList(arrayList));

// toLocaleString
// exe 1
let date = new Date(2024, 8, 1);
function newDate(arrayDate) {
  return arrayDate.toLocaleString();
}
console.log(newDate(date));

// exe 2
let amount = 1234.56;
function newAmount(arrayAmount) {
  return arrayAmount.toLocaleString("en-Us", {
    style: "currency",
    currency: "USD",
  });
}
console.log(newAmount(amount));

// slice
let sampleArray = [1, 2, 3];
let arrayResult = sampleArray.slice(1, 2);
console.log(arrayResult);

// splice
let spliceArr = [1, 2, 3, 4];
let outputSplice = spliceArr.splice(1, 1, "a");
console.log(outputSplice);
console.log(spliceArr);

// isArray
let variables = [1, 2, 3, 4];
console.log(Array.isArray(variables));


