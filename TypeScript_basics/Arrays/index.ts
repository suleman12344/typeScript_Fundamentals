//Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
function find_a_word(arr: string[], len: number) {
  let a_arr: string[] = [];
  let j = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i].startsWith("a")) {
      a_arr[j] = arr[i];
      j++;
    }
  }
  return a_arr;
}
let Word_arr: string[] = ["apples", "ballons", "art", "phone", "arm", "aid"];
let a_arr: string[] = find_a_word(Word_arr, Word_arr.length);
console.log(a_arr);

//Create a script that logs the second to last element of an array named fruits.
let fruits = ["apple", "banana", "orange", "mango", "watermelon"];
for (let i = 1; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Develop a function that takes an array of numbers and returns a new array with each number squared.
function sqare_arr(arr: number[], len: number) {
  for (let i = 0; i < len; i++) {
    arr[i] = Math.pow(arr[i], 2);
  }
  return arr;
}
let num_arr: number[] = [1, 3, 4, 5, 6, 7, 8, 9];
let num_arr1 = sqare_arr(num_arr, num_arr.length);
console.log(num_arr1);

//Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverse_arr(arr: number[], len: number) {
  let arr_re: number[] = [];
  let j = 0;
  for (let i = len - 1; i >= 0; i--) {
    arr_re[j] = arr[i];
    j++;
  }
  return arr_re;
}
let num1_arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num1_arr = reverse_arr(num1_arr, num1_arr.length);
console.log(num1_arr);

//Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
function remov_falsy(arr: any[]) {
  return arr.filter(Boolean);
}
let value = [1, 2, 3, "", , null, false, 0];
let new_arr: any[] = remov_falsy(value);
console.log("after removing the falsy values " + new_arr);
//Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let num11: number[] = [1, 2, 3];
let num22: number[] = [4, 5, 6];
let num33: number[] = num11.concat(num22);
console.log(`array 3: ${num33}`);
//Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(arr: number[]) {
  let sum = 0;
  for (let i in arr) {
    sum += Number(arr[i]);
  }
  console.log(`sum of array : ${sum}`);
}
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumOfElements(ar);

//Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
// using arr give above
function finding(arr: number[], num: number) {
  for (let i in arr) {
    if (arr[i] == num) {
      return i;
      break;
    }
  }
  return -1;
}
let num_toFind = 5;
let result = finding(ar, num_toFind);
if (result == -1) {
  console.log("Element is not present in the array");
} else {
  console.log(`Element is present at index ${result} in the array`);
}

//Write a function to find and return the smallest number in an array of integers.
// using array given above
function Min_find(arr: number[]) {
  let min = 10000;
  for (let i in arr) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let min = Min_find(ar);
console.log(`The smallest number in an array is : ${min}`);
