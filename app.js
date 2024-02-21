//           Qno1 

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}


const originalStr = "hello";
const reversedStr = reverseString(originalStr);
console.log("Original:", originalStr);
console.log("Reversed:", reversedStr);




//           Qno2


function countVowels(str) {

    const vowelRegex = /[aeiou]/gi;

    const vowelsArray = str.match(vowelRegex);

    return vowelsArray === null ? 0 : vowelsArray.length;
}


const testString = "Hello, how are you?";
console.log("Number of vowels:", countVowels(testString));



//           Qno3


function capitalizeFirstLetterOfEachWord(sentence) {

    const words = sentence.split(" ");


    for (let i = 0; i < words.length; i++) {

        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    const capitalizedSentence = words.join(" ");

    return capitalizedSentence;
}


const sentence = "hello world";
const capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
console.log(capitalizedSentence);


//           Qno4


function isPalindrome(str) {

    const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}


const testStrings = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testStrings));




//           Qno5


function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}


const numbers = [1, -2, 3, -4, 5];
console.log("Sum of positive numbers:", sumOfPositiveNumbers(numbers));


//           Qno6

function findFirstOccurrenceIndex(arr, target) {
    return arr.indexOf(target);
}


const arrays = [5, 3, 7, 9, 3, 2];
const targetElement = 3;
console.log("Index of the first occurrence:", findFirstOccurrenceIndex(arrays, targetElement));



//           Qno7

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}


const array1 = [1, 2, 3, 4, 2, 3, 5];
console.log("Array with duplicates removed:", removeDuplicates(array1));



//           Qno8



function bubbleSortAscending(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function bubbleSortDescending(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {

                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


const array = [5, 3, 7, 1, 9, 2];
console.log("Ascending order:", bubbleSortAscending(array.slice()));
console.log("Descending order:", bubbleSortDescending(array.slice()));



//           Qno9


let number1 = 2;

while (number1 <= 20) {
    console.log(number1);
    number1 += 2;
}


//           Qno10


function factorial(n) {
    let result = 1;
    let i = 1;


    do {
        result *= i;
        i++;
    } while (i <= n);

    return result;
}


const number = 5;
console.log("Factorial of", number, "is", factorial(number));


//           Qno11
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};


for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}



//           Qno12


const numberss = [1, 2, 3, 4, 5];
const doubledNumbers = [];

// Loop through the array using a for-of loop
for (let num of numberss) {
    doubledNumbers.push(num * 2);
}

// Print the doubled numbers
console.log("Original array:", numberss);
console.log("Doubled array:", doubledNumbers);



//           Qno13


function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return number + " is even.";
    } else {
        return number + " is odd.";
    }
}


console.log(checkEvenOrOdd(5)); 
console.log(checkEvenOrOdd(8)); 

//           Qno14

function findMaxOfThreeNumbers(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}


const num1 = 5, num2 = 10, num3 = 7;
console.log("Maximum of", num1 + ",", num2 + ", and", num3 + ":", findMaxOfThreeNumbers(num1, num2, num3)); 

//           Qno15

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 

