const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

const rod= colors['golden rod'];
console.log(rod);


// adding another property to obj
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car['passenger capacity']=5;
console.log(car);


// display physics marks as output
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);



// count the number of properties

let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count=0;
for(let i in student2){
   count++;
}
console.log('number of properties: ',count);





// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(let prop in myObject){
    const property= prop;
    console.log('key: '+prop+' | type: '+(typeof myObject[prop]));
}
