const numbers =[1,2,3,4,5,6];
const numbers2 =[1,2,3,4,5,6];

// reverse using reverse method
numbers.reverse(); // mutable method

console.log(numbers);


// reverse using manual

const rev_numbers=[];

for(const num of numbers2){
    rev_numbers.unshift(num);
}
console.log(rev_numbers);


// reverse side
let rev_number2=[];
for(let i=numbers2.length-1;i>=0;i--){
    const num= numbers2[i];
    rev_number2.push(num);
}
console.log(rev_number2);