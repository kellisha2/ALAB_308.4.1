// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
    // for (let i = 0; i < 101; i++){
    //     console.log(i)
    // }

// If a number is divisible by 3, log “Fizz.”
    for (let i = 0; i < 101; i++){
        console.log(i)

        if (i % 3 === 0){
            
         console.log('Fizz.')
        }
        
    }

// If a number is divisible by 5, log “Buzz.”
for (let i = 0; i < 101; i++){
    console.log(i)

    if (i % 5 === 0){
        
     console.log('Buzz.')
    }
    
}
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”

for (let i = 0; i < 101; i++){
    console.log(i)

    if (i % 3 === 0 && i % 5 ===0){
        
     console.log('Fizz Buzz.')
    }
    
}
// If a number is not divisible by either 3 or 5, log the number.
for (let i = 0; i < 101; i++){

    if (i % 3 !== 0 && i % 5 !==0){
        
     console.log(i)
    }
    
}

// Part 2: Prime Time
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. 
// For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. 
// As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.

let n = 20;

for (let i = 1; i > 101; i++){
    console.log(n)
    if (n % n === 0 && n % 1 === 0)
        console.log("Prime number")
}


function isPrime(n)
    for (let i = 2; i % 2 === 0; i++){
        if (n % i === 0)
            return('Prime number')
    }



// Part 3: Feeling Loopy   
// CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

// Loop through the characters of a given CSV string.
    let customer1 = '42,Bruce,Knight,41'

    for (let i = 0; i < customer1.length; i++) {
    console.log(customer1[i])
    }

// Store each “cell” of data in a variable.



//  const customerInfo = [
//     {ID: 42 , Name: "Bruce" , Occupation: "Knight" , Age: 41 },
//     {ID: 57 , Name: "Bob" , Occupation: "Fry Cook" , Age: 19 },
//     {ID: 63 , Name: "Blain" , Occupation: "Quiz Master" , Age: 58 },
//     {ID: 98 , Name: "Bill" , Occupation: "Doctor Assistant" , Age: 26 },
//  ]   


// //  for (let i=0; i < customerInfo.length; i++ ){
//     console.log(customerInfo[0].name)
// //  }