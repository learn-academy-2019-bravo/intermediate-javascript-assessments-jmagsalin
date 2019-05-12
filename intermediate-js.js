// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]
reverseArray = array => {
 var newArr = array.reverse()
 return newArr}

console.log(reverseArray(originalArray));
// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
letterCounter = string => {
	var countL = 0
	var newString = string.toLowerCase().split("")
  for (let i = 0; i < newString.length; i++)
	if (newString[i] === "l"){
		  countL++}
  return countL
}
console.log(letterCounter(ourString));
// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
var startFib = [0,1]
getFib = number => {
	for (let i = 1; i < 10; i++){
	startFib.push(number[i] + number[i - 1])
  }return startFib
}
console.log(getFib(startFib));
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
oddChecker = array => {
	newArr = []
	oddArr = []
	for (let i = 0; i < array.length; i++)
	if (typeof array[i] == "number"){
		newArr.push(array[i])
	}
		for (let i=0; i < newArr.length; i++)
		if (newArr[i] % 2 !== 0){
			oddArr.push(newArr[i])
		}return oddArr
}
console.log(oddChecker(fullArr));
