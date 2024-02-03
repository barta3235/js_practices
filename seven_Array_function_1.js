// pass in an array, and the function returns the sum of the array elements

function sumOfArray(numbers){
    let sum=0;
    for(const number of numbers){
        console.log(number);
        sum=sum+number;
    }
    return sum;
}

const numbers=[1,2,3,4,5];
const sum= sumOfArray(numbers);
console.log('Sum of Array is: ',sum);





// pass in an array, and the function returns the even numbers of the array.


function evenNumbersOnly(numbers){
    let evens=[];
    for(const number of numbers){
        if(number%2===0){
            evens.push(number);
        }
    }   
    return evens;
}

const numbers2=[5,6,7,8,6,55];
const y=evenNumbersOnly(numbers2);
console.log('Even numbers are: ',y);

