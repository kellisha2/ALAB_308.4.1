// Part 2: Expanding Functionality
// Begin with the following task:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

const customerInfo = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let individualRowArray = [];
let outerRowsArray = [];
let word = ""; // declaring it a string

for (let i = 0; i < customerInfo.length; i++) {
    const character = customerInfo[i];

    if (character == ",") {
        individualRowArray.push(word);
        word = ""; 
    } else if (character == "\n") {
        individualRowArray.push(word);
        outerRowsArray.push(individualRowArray);
        word = ""; // to prevent the end of the 1st array to start the beginning of the next array
        individualRowArray = [];
    } else {
        word = word + character;
    }
}

console.log(outerRowsArray)

// Part 3

let arrayOfObjects = [];

let firstRowData = outerRowsArray[0];
console.log(firstRowData)
for (let i = 1; i < outerRowsArray.length; i++) {
    let obj  = {};
    let outerRow = outerRowsArray[i]
    
    for (let index = 0; index < firstRowData.length; index++) {
        const headerKeyFromFirstRowData = firstRowData[index];
        obj[headerKeyFromFirstRowData.toLowerCase()] = outerRow[index];
    }
    arrayOfObjects.push(obj);

}

console.log(arrayOfObjects)


// Part 4

// Remove the last element from the sorted array.
// use Pop


// splice

// push