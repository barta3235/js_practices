const mobile={
    brand:'samsung',
    price: 20000,
    color: 'red',
    camera: '12mp'
}


// for in : object
for (let i in mobile){
    console.log(i);
    console.log(mobile[i]);
}

const keys= Object.keys(mobile);
const values= Object.values(mobile);
console.log(keys, values)


// for off : array

for(const i of keys){
    console.log(i, ':',mobile[i]);
}



// another way of declaring obj
const box= new Object();

