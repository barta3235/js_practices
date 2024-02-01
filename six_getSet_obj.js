const person={
    name: 'Sadar Uddin',
    age: 25,
    profession: 'developer',
    salary:25000,
    married:false,
    'fav places': ['bandarban','saintmartin','cox']
}
console.log(person);



// object property view  (dot notation)
console.log(person.name);
const naam= person.name;
console.log(naam);


// bracket notation
console.log(person['age']);
const boyosh= person['age'];
console.log(boyosh);

console.log(person['fav places']);



//chnaging property values

person.salary=30000;
person['age']=50;
person['fav places'].push('lalakhal','bandarban');

console.log(person);


const salaryVal= 'salary';
person[salaryVal]=70000;

console.log(person);