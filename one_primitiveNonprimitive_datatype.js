// numbers string boolean are primitive datatypes
// null undefined are also primitive


// object array are non primitive



let x=9;  // x takes its own space in memory
let y=8;  // y takes its own space in memory

x=y; // x here takes up its own space in memory and stores the value inside y
console.log(x,y);



let p= {job: 'web dev'};  // p takes up its own space in the memory
let q = p // q points to the memory space of q
console.log(p,q)

q.job='sen. web dev';
console.log(p,q);

// q holds a reference from p