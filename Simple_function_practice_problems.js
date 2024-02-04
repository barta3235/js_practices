// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function one(num1,num2,num3,num4){
    return num1*num2*num3*num4;
}
console.log(one(2,3,4,2));


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function two(num){
    if(num%2!==0){
        return num*2;
    }else{
        return num/2;
    }
}
console.log(two(4));
console.log(two(5));


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers,len){
   let sum=0;
   for(let num of numbers){
      sum=sum+num;
   }
   return sum/len;
}
const numbers=[1,2,3,4,5]
const len=numbers.length;
const result= make_avg(numbers,len);
console.log(result);




// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let count=0;
    for(let i=0;i<str.length;i++){
         if(str[i]==='0'){
            count++;
         }
    }  
    return count;  
}

const shadakalo= '001001110';
console.log(count_zero(shadakalo));




// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){
    if(num%2===0){
        return `Even`;
    }else{
        return `Odd`;
    }
}

console.log(odd_even(28));