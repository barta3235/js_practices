//maps ==> loops through each element of the array and do the operation that you passed in the callback function and hold the result from each operation in an array and finally returns you the array.

const numbers= [4,5,2,8,10];


function doubleIt(num){
    console.log('num now:',num);
    return num*2;
}

const result = numbers.map(doubleIt);
console.log(result);

/////
const double2 = (x) => x*2;

const result2= numbers.map(double2);
console.log(result2);


///
const output3= numbers.map(n=>n*2);
console.log(output3);



////////
const numbers2= [12,34,8,0,33];

const doubled= numbers2.map(num=>num*2);
console.log(doubled);


///////
const fiveBonus = numbers.map(num=> num+5);
console.log(fiveBonus);

///

const halved =numbers.map(n=>n/2);
console.log(halved);  ////

////

const friends= ['tom','michael','toby','oliver'];

const len= friends.map(friend=> friend.length);
console.log(len);

////

const firstChar= friends.map(friend=> friend.charAt(0));

console.log(firstChar);