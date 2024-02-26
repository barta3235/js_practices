// 8 ways to get undefined


//one : variable that is not initialized
let first
console.log(first);


//two: function with no return statement

function second(a,b){
    const total= a+b;
}
console.log(second());


//three: if no argument is passed against a parameter, those parameters become undefined.

function third(a,b,c,d){
    const total= a+b+c+d;
    console.log(a,b);
}
third();



//forth: if return statement is empty then it will return undefined

function forth(a,b){
    if(a<0 || b<0){
        return
    }
    return a+b;
}
const forthcontainer= forth(2,-5);
console.log(forthcontainer);


// five: property that doesnt exist on an object will give you undefined
const fifth={id:2, name:'juju',age:40};
console.log(fifth.age,fifth.salary);




//six: accessing array elements out of the index range
const six= [1,2,3,4,5];
console.log(six[1],six[3],six[6]);

// seven: deleting array element inside the array
const seven= [1,2,3,4,5];
delete seven[1];
console.log(seven[1]);



//eight: set a value directly to undefined
const eight= undefined;
// instead of undefined use null

// type of null is Object
// type of undefined in undefined


