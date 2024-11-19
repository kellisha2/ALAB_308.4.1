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

// Part 3: For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let arrayOfObjects = [];

let firstRowData = outerRowsArray[0];
console.log(firstRowData)
for (let i = 1; i < outerRowsArray.length; i++) {
    let obj = {};
    let outerRow = outerRowsArray[i]

    for (let index = 0; index < firstRowData.length; index++) {
        const headerKeyFromFirstRowData = firstRowData[index];
        obj[headerKeyFromFirstRowData.toLowerCase()] = outerRow[index];
    }
    arrayOfObjects.push(obj);

}

console.log(arrayOfObjects)




// Part 4

// Remove the last element from the sorted array. Use Pop
arrayOfObjects.pop();
console.log(arrayOfObjects)

// Insert the following object at index 1. Use splice 

let newCustomerInfo = {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
}

arrayOfObjects.splice(1, 0, newCustomerInfo)

console.log(arrayOfObjects)
// push

let addSecondArray = {
    id: "7",
    name: "Bilbo",
    occupation: "None",
    age: "111"
}

arrayOfObjects.push(addSecondArray)

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

// let customerAges = Number(arrayOfObjects[0].age) + Number(arrayOfObjects[1].age) + Number(arrayOfObjects[2].age)

let customerAges = 0;
for (let index = 0; index < arrayOfObjects.length; index++) {
     customerAges = customerAges + Number(arrayOfObjects[index].age)
}

let averageAge = customerAges / arrayOfObjects.length;
console.log(averageAge)