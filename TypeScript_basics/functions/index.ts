//Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(arr: number[]) {
  let mul = 1;
  for (let i = 0; i < arr.length; i++) {
    mul = arr[i] * mul;
  }
  return mul;
}
let mul_arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = calculateProduct(mul_arr);
console.log(`the total multiplication of an arry : ${result}`);
//Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
function check_len(arr: string[], number: number) {
  let new_arr: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > number) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
}
let num = 5;
let string_arr: string[] = [
  "apple",
  "golf",
  "university",
  "banana",
  "watermelon",
];
let res_string: string[] = check_len(string_arr, num);
console.log(
  `The new string whose lenght is greater then ${num} : ${res_string}`
);
//Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log(`the word ${arr[i]} is duplicates`);
        break;
      }
    }
  }
}
let string_arr2: string[] = [
  "apple",
  "golf",
  "university",
  "banana",
  "watermelon",
  "watermelon",
  "apple",
];
findDuplicates(string_arr2);

//Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr: number[]) {
  let inc_arr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    inc_arr.push(arr[i] + 1);
  }
  return inc_arr;
}
let num_arr: number[] = [1, 2, 2, 4, 5, 6, 2, 8, 9, 10];
let new_arr: number[] = [];
new_arr = incrementAll(num_arr);
console.log(
  `after increment all the element of the arr the arr is : ${new_arr}`
);
//Develop a function countOccurrences that counts how many times a specific element appears in an array.
function count(arr: number[], value: number) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
let value_toFound = 2;
let result1 = count(num_arr, value_toFound);
console.log(`Number of count ${value_toFound} in an arr : ${result1}`);
//Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr: any[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
let checkArr = ["a", "b", "c"];
if (isSorted(checkArr)) console.log("The array is sorted");
else console.log("The array is not sorted");
//Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".

//Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function temp_convert(arr: number[]) {
  let new_tem: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    new_tem.push((arr[i] - 32) * (5 / 9));
  }
  return new_tem;
}
let fahrenheit: number[] = [78, 98, 90, 77, 89];
let new_tem_arr: number[] = [];
new_tem_arr = temp_convert(fahrenheit);
console.log(
  `after changing the fahrenheit temperature into celciuse is : ${new_tem_arr}`
);
//Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.

//Create a function swapElements that swaps two specified indices in an array.
