"use strict";
//Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function count(str, chara) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == chara) {
            count++;
        }
    }
    return count;
}
let string = "Hi my name is muhammad suleman";
let character = "a";
let result = count(string, character);
console.log(`The ${character} occures ${result} times in a string '${string}'`);
//Write a function that takes an array of integers and sorts them from smallest to largest.
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    console.log(arr);
}
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
sort(nums);
//Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function revers(arr) {
    let reves_arr = [];
    for (let i = arr.length; i >= 0; i--) {
        reves_arr.push(arr[i]);
    }
    return reves_arr;
}
let num2_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`the reverse arr :${(num2_arr = revers(num2_arr))}`);
