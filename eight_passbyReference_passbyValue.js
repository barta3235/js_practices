function sum(a,b,c){
    console.log(arguments);// argument output will be an array like object
    console.log(typeof arguments);
    //cannot use push pull as it is an array like object
    const args=[...arguments];
    console.log(args);
    const result= a+b+c;
    return result;
}

const total=sum(45,45,31,12,33,44);
console.log(total)
console.log(sum.length);  // function a koita parameter ache


let num1=5;
let num2=7;
function multiply(num1,num2){
     num1= 34;
     const result=num1*num2;
     return result;
}

const output= multiply(num1,num2);
console.log(num1);
console.log(output);


let student1= {name: 'Jalil', partner: 'porsha'};
let student2={name: 'ananta', partner: 'okksa'};


function makeMovie(couple1,couple2){
    couple1.name='Anjok';
    couple2.partner='mim';
}


console.log(student1);
console.log(student2);

makeMovie(student1,student2);
console.log(student1);
console.log(student2);


// if any primitive type is sent as a parameter to a function and if the parameter value is changed inside the function, the value of the parameter that is declared outside the function will remain unchanged
// where for non primitive, if parameter is changed inside the function, then the value of the parameter outside the function also changes

// primitive type -- pass by value;
// non primitive type---  pass by reference
