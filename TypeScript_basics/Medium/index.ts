//Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius: any) {
  let area = Math.PI * Math.pow(radius, 2);
  return area;
}
let radius = 22;
let area_of_circle = calculateArea(radius);
console.log(`area of a circle : ${area_of_circle}`);

//Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let max_tem = 0;
let temperatures_arr = [44, 23, 11, 44, 33];
for (let i = 0; i < 5; i++) {
  if (temperatures_arr[i] > max_tem) {
    max_tem = temperatures_arr[i];
  }
}
console.log(`The highest temperature is : ${max_tem}`);

//Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.

let age = 22;
if (age < 18) {
  console.log("MINOR..");
} else {
  console.log("ADULT..");
}

//Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function getCount(arr: any, arr_len: number) {
  let count = 0;
  for (let i = 0; i < arr_len; i++) {
    if (arr[i] >= 0) {
      count++;
    }
  }
  return count;
}
let number_arr: number[] = [1, -2, 3, -4, 5, -2, -4, 100, 0, 21];
let count_possitive = getCount(number_arr, number_arr.length);
console.log(`total positive numbers in a array ${count_possitive}`);
