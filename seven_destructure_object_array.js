const actor ={
    name: 'AnantA',
    age: 40,
    phone: '01789674346',
    money: 120000034,
}

// if right side is an object left side of destructing will be an object as well

// use object property name as variable
const {phone} = actor;

console.log(phone);

const {money}= actor
console.log(money);


// aliasing money as taka and name as naam
const {money: taka, name:naam}= actor
console.log(taka, naam);


// array destructuring

const numbers= [45,99];

const [first,second]= numbers;

console.log(first,second);

const [x,y]= [12,77];
console.log(x,y);



//


function doubleThem(a,b){
    return [a*2,b*2];
}
console.log(doubleThem(2,4));

const [ein,zwei] =doubleThem(6,9);
console.log(ein,zwei);