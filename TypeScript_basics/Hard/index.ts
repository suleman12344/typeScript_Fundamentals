//Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function count(str: string, chara: any) {
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
function sort(arr: number[]) {
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
function revers(arr: number[]) {
  let reves_arr: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reves_arr.push(arr[i]);
  }
  return reves_arr;
}
let num2_arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`the reverse arr :${(num2_arr = revers(num2_arr))}`);

//Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.

function calculator(num1: number, num2: number, operator: string) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}
let operator = "+";
let num = 2;
let num3 = 3;
let result1 = calculator(num, num3, operator);
console.log(`${num} ${operator} ${num3} = ${result1}`);
