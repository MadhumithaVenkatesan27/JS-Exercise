// initialization
// create date
let date = new Date();
console.log(date);

// date
let newDate = new Date("2002-03-25");
console.log(newDate); //year, month, date

// datetime arguments
let customizeDate = new Date(2002, 10, 4, 9, 30); //year, month, day, hour, minute, sec
console.log(customizeDate);

// datetime string
let stringDate = new Date("2024-01-02T12:00:002");
console.log(stringDate);

// Conversion
// toString
let currentDate = new Date(); //sun sep 01 2024 20:42:59
console.log(currentDate.toString());

// toDateString
let dateString = new Date();
console.log(dateString.toDateString()); // wed sep 01 2024

// toTimeString
let timeDate = new Date();
console.log(timeDate.toTimeString()); // 15:30:25

// toISOString
let specificDate = new Date("2024-01-01T00:00:00");
console.log(specificDate.toISOString());

// getTime
let get = new Date();
console.log(get.getTime()); //numerical value
