// data access
const data =[{id:1, name: 'Abul', address:'kochukhet'}];

console.log(data[0].address);


const product= {
     count: 5000,
     data:[
        {id:1, name:'lenovo laptop', price: 65000},
        {id:2, name:'macbook laptop', price: 165000},
     ]
}

// second product price
console.log(product['data'][1].price);



const user={
    id: 5001,
    name: 'shoriful raaj',
    address: {
        street:{
           first: '54/1 uttara side',
           second: 'poribag er goli',
           third: 'no dorai',
        } ,
        city: 'Dhaka'
    }
}

console.log(user['address']['street'].second);


const user2={
    id: 5002,
    name: 'poribibir majar',
    address:{
        city: 'chittagonj',
        country: 'bangladesh',
    }
}

console.log(user2['address']['street']?.second);










////////////// Give a read





// const user2={
//     id: 5002,
//     name: 'poribibir majar',
//     address:{
//         city: 'chittagonj',
//         country: 'bangladesh',
//     }
// }
// console.log(user2['address']['street'].second);




// Error: TypeError: Cannot read properties of undefined (reading 'second').




// This means when the code is trying to access second it isnt able to as street is undefined, to overcome this error we use optional chaining


// console.log(user2['address']['street']?.second);
// If only street is present only then the code will try to access second
