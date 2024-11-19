// Part 2: Expanding Functionality
// Begin with the following task:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

const customerInfo = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let individualRowArray = [];
let outerRowsArray = [];
let word = ""; // delcaring it as  string

for (let index = 0; index < customerInfo.length; index++) {
    const character = customerInfo[index];

    if(character == ",") {
        console.log(word)
        individualRowArray.push(word);
        word = "";
    } else if(character == "\n") {
        individualRowArray.push(word);
        outerRowsArray.push(individualRowArray);
        word = "";
        individualRowArray = [];
    } else {
        word = word + character;
    }
}

console.log(outerRowsArray)
