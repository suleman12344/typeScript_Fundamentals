//Q1. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let persona_name = "Muhammad Suleman";
console.log(
  `Hello ${persona_name}, would you like to learn some python today?`
);

//Q2. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
persona_name = "Muhammad Suleman";
function toTitleCase(str: string): string {
  return str
    .toLowerCase() /* first convert the complete string to lower case then split it then map to make sure just first letter of every word is capital */
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("LowerCase " + persona_name.toLowerCase());
console.log("upperCase " + persona_name.toUpperCase());
let titleCase = toTitleCase("muhammad suleman");
console.log("titleCase " + titleCase);

//Q3. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote = "Our knowledge is a little island in a great ocean of nonknowledge";
let autor = "Isaac Bashevis Singer";
console.log(`${autor} once said, " ${quote}."`);

//Q4. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Isaac Bashevis Singer";
let message = `Hi, I'm a autor of the famous quote"Our knowledge is a little island in a great ocean of nonknowledge"`;
console.log("message: " + message);

//Q5. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
function removeWhiteSpaces(name: string) {
  let newName = name.trim(); // i use the trim function that remove the white space at begining and
  return newName;
}
let name = "      Muhammad Suleman Goraya             ";
console.log("The name with tab and newline" + name);
let new_name: string = removeWhiteSpaces(name);
console.log("after removing the whiteSpaces " + new_name);

//Q6. Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

let addition = 5 + 3;
let subtraction = 12 - 4;
let multiplication = 4 * 2;
let division = 16 / 2;
console.log("addition: ", addition);
console.log("subtraction: ", subtraction);
console.log("multiplication: ", multiplication);
console.log("division: ", division);

//Q7. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let fav_number = "7";
console.log(`my favorite number is ${fav_number} `);

//Q8. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
function printName_onebyone(name: string[]) {
  for (let i = 0; i < name.length; i++) {
    console.log(`${i + 1}. ${name[i]}`);
  }
}
let names = ["hassan", "anas", "taha", "nooran", "monis", "abdullah"];
printName_onebyone(names);

//Q9.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
function Greetings(name: string[]) {
  for (let i = 0; i < name.length; i++) {
    console.log(`${i + 1}. hi ${name[i]} i hope you are doing great..`);
  }
}
Greetings(names);

//Q10. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transport = ["bike", "cycle", "car"];
console.log(`i would like to have a BMW ${transport[0]}`);
console.log(`i would like to have a simple ${transport[1]}`);
console.log(`i would like to have a sports ${transport[2]}`);
