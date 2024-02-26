const max= Math.max(3,23,45,1,89,23);
const numbers= [3,5,2,45,5,43,90,32];

const arrayMax = Math.max(numbers);
console.log(numbers);
console.log(arrayMax);

const arrayMax2 = Math.max(...numbers);
console.log(...numbers);
console.log(arrayMax2);



// use spread operator to copy

const nums = [4,5,6,89];
const nums2 =nums;
nums2.push(12);
console.log(nums);
console.log(nums2);
// as we update nums2, num also gets pushed with the value 12. WHY??


// Array is non primitive and so is Object. So when they set their value to another variable, the other variable holds the reference to the original array/object/non primitive type variable.

// Hence if we update the new variable the old variable gets updated too

// here both nums and nums2 point to the same location.

const friends= [4,6,7,4,2]
const dosto=[...friends];
dosto.push(12);

console.log(dosto);
console.log(friends);


// spread operator diye copy korle reference ke dhore rakhena


// concat array
const a= [1,2,3];
const b= [4,5,6];

const combinedArray= [...a,...b];
console.log(combinedArray);


// passing argument

const c=[4,5,6];
const sum = (a,b,c) => a+b+c;
console.log(sum(...c));

// object copy

const d = {name:'piku', age: 13};
const e= {...d};
console.log(e);