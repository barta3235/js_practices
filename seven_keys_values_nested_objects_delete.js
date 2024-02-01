const computer={
    brand: 'lenovo',
    price:35000,
    processor:'intel',
    hdd: '512gb',
    monitor:'hp'
}


// to find out the keys
const keys= Object.keys(computer);
console.log(keys);

// to find out the values
const values= Object.values(computer);
console.log(values);

// nested objects

const college={
    name: 'vnc',
    class:['10','11','12'],
    events: ['science fair','bijoy dibosh','21 feb'],
    censor: 'one',
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit:'top'
        }
    }
    
}


console.log('----------------------------')
console.log(college['name']);
console.log(college.unique.color);
console.log(college.unique.result);
console.log(college.unique.result.merit);

college.unique.result.merit='second most';

console.log(college.unique.result);

console.log(college.events[2]);

college.events[2]='pohela boishak';
console.log(college.events[2]);

delete college.censor;
console.log(college);