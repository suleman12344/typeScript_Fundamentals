"use strict";
//Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(arr) {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        mul = arr[i] * mul;
    }
    return mul;
}
let mul_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = calculateProduct(mul_arr);
console.log(`the total multiplication of an arry : ${result}`);
//Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
function check_len(arr, number) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > number) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
let num = 5;
let string_arr = [
    "apple",
    "golf",
    "university",
    "banana",
    "watermelon",
];
let res_string = check_len(string_arr, num);
console.log(`The new string whose lenght is greater then ${num} : ${res_string}`);
//Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log(`the word ${arr[i]} is duplicates`);
                break;
            }
        }
    }
}
let string_arr2 = [
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
//Develop a function countOccurrences that counts how many times a specific element appears in an array.
//Create a function isSorted that checks if an array is sorted in ascending order.
//Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
//Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
//Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
//Create a function swapElements that swaps two specified indices in an array.
