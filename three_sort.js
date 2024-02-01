const persons=['rakib','nakib','sakiv','akib','dakib'];
const sortedPerson=persons.sort();
console.log(sortedPerson);


const numbers= [2,44,6,19,0,8,9];

const asc_numbers= numbers.sort(function(a,b){return a-b});
console.log(asc_numbers);


const dsc_numbers= [...numbers].sort(function(a,b){return b-a});
console.log(dsc_numbers);
