// var let const
// let and const are block scoped

 
const person={
    id: 123,
    name: 'Ahnaf',
    address: '8 new khanpur',
    postCode: 1300
}

const {id:ID_Num, ...restInfo}= person;
console.log(ID_Num);
console.log(restInfo);


const [first, ...remaining]=['akil','chakil','makil','dakil'];
console.log(first);
console.log(remaining);

const k = Object.keys(person);
console.log(k);

const e = Object.entries(person);
console.log(e);