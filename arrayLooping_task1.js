

// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']


const colors = ['red', 'blue','green', 'yellow', 'orange'];

let newColors=[];
for(const color of colors){
   const temp=color;
   console.log(temp);
   newColors.unshift(temp);
}
console.log(newColors);







// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
const newNumbers=[];
for(let i=0;i<numbers.length;i++){
      if(numbers[i]%2==0){
           newNumbers.push(numbers[i])
      }
}
console.log(newNumbers);







// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var members = ['Tom', 'Tim', 'Tin', 'Tik'];
let textMembers='';
for(let member of members){
    textMembers=textMembers.concat(member);
}
console.log(textMembers);









// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'


const statement = 'I am a hard working person';
let statementArray = statement.split(' ');
let inverted=[];
console.log(statementArray);

for(let item of statementArray){
    inverted.unshift(item);
}

result=inverted.join(' ')
console.log(result);

