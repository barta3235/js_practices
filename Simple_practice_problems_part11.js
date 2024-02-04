// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celcius(c){
    const fahrenheit= c* (9/5)+32;
    return `${c} degree celsius is equivalent to ${fahrenheit} degree fahrenheit `; 
}
console.log(celcius(32));



// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5
// output: 2

function finder(numbers,find){
    let count=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]===find){
             count++;
        }
    }
    return `${count}`; 
}
const numbers=[5,6,5,4,44,33,77,0,5];
const find= 9;
console.log(finder(numbers,find));




// Task-3:
// Write a function to count the number of vowels in a string.

function vowelFinder(str){
     let count=0;
     for(let i=0;i<str.length;i++){
        if(str[i].includes('a') || str[i].includes('e') ||str[i].includes('i') || str[i].includes('o') || str[i].includes('u') ){
            count++;
        }
     }
     return `There are ${count} vowels in the string`;
}

const str="knowledge";
console.log(vowelFinder(str));




// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWord(words){
   const temp = words.split(' ');
   max=temp[0];
   for(let i=0;i<temp.length;i++){
      if(temp[i].length>max.length){
        max=temp[i];
      }
   }
   return `The longest word is": ${max}`;
   
}

const words= "I am learning Programming to become a programmer";
console.log(longestWord(words));




// Task-5:
// Generate a random number between 10 to 20.

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(getRandomNumber(10,20));

