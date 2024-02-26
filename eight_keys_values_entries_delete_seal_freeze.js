const glass={
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true, 
}

// the name,color,price isCleaned are objects key or properties and in the RHS are th values
console.log(glass);
const keys =Object.keys(glass);
console.log(keys);


const values = Object.values(glass);
console.log(values);


const entries = Object.entries(glass);
console.log(entries);
//returns the object as array of property:value


delete glass.isCleaned;
console.log(glass);

// delete using destructuring

const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);


// freeze an object
Object.freeze(glass);
glass.madeIn= 'bangladesh'
console.log(glass);


//seal an object (change existing property values) but cannot add or remove property 
Object.seal(glass);
