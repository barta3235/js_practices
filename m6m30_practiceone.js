// arrow function that takes 3 parameter and multiply
const multiply = (a,b,c) => a * b * c;
console.log(multiply(2,3,4));

// default parameter
const joss = (a,b='kya hua?') => a+' '+b;
console.log(joss('Dyatlov'));


// check length of each element is even, if even push element with even length to new array and return result
const friends =['rohana','prottoy','siam','wasifa','shadman'];
const newFriends=[];
const bondhu = (chenajana) => {
    for(const friend of chenajana){
        const len= friend.length;
        if(len%2===0){
           newFriends.push(friend);
        }
    }
    return newFriends;
}
console.log(bondhu(friends));

// arrow function that will square each array element
// followed by sum of the squared element
// return the average of the sum

let sum=0;
const squared = (array) =>{
    for(const element of array){
          sum=sum+ Math.pow(element,2);
    }
    aveSum= sum/ array.length;
    return aveSum;
} 

console.log(squared([1,2,3,4]));

// arrow function that will take 2 array inputs
//combine the two array and assign them in a new array
// find max value from the new array and return
const array1=[1,2,3,44,5];
const array2= [6,7,8,9,10];
const joinArray= (array1,array2)=>{
     const newArray= [...array1,...array2];
     const maxNum= Math.max(...newArray);
     return maxNum;
}

const res=joinArray(array1,array2);
console.log(res);



