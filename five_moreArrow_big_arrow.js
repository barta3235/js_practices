const difference= (x,y) => x-y;
console.log(difference(5,1));

const multiply=(f,s,t)=> f * s* t;
console.log(multiply(2,2,3));



student= {
    name: 'Ahnaf',
    age: 23,
    profession: 'bekar rn',
    food: ['chips','coke'],
}

const getAge = (person) => person.age;  //implicit return

const getFood = (person) => person['food'][1];
console.log(getAge(student));

console.log(getFood(student))


const getThird = (numbers) => numbers[2];
console.log(getThird([1,2,3,4,5]));

const doMath= (x,y) => `x je hocche ${x} and y je hocche ${y} ora duijon mile hoi ${x+y}`;
console.log(doMath(3,3));




// big arrow function
const doMathAgain = (x,y,z) => {
      const sum= x+y+z;
      const mult= x*y*z;
      const result= sum+mult;
      return result;
}

console.log(doMathAgain(2,2,2));
