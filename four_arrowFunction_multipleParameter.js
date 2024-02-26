function add(a,b){
    const result= a+b;
    return result;
}


// function expression

const add2 = function(a,b){
    return a+b;
}

// arrow function

const add3= (a,b) => a+b;


const add4 = (num1,num2,num3) => num1 + num2 + num3;

const sum= add(5,6);
console.log(sum);
 
const sum3= add3(5,6);
console.log(sum3);

const multiply = (num1, num2) => num1 *num2;
console.log(multiply);


const sum4= multiply(5,6);
console.log(sum4);

