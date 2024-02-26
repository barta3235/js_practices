//map calls a callback function on each element of an array, performs operation on each element and hold the result and then returns the results as array

//for each works like map on each element but doesnot return anything

const numbers= [1,5,6,4,15];

const result= numbers.forEach(n=> console.log(n));



//filter selects elements based on condiiton and returns an array witht the elements that fulflil

// filter ///////////
const players= [76,56, 65,11,55,59];

const selectedPlayer= players.filter(n=>n>55);
console.log(selectedPlayer);

const selectedPlayerOdd= players.filter(n=>n%2==0);
console.log(selectedPlayerOdd);


///////
const friends= ['tom','michael','toby','oliver'];

const oddFriend=friends.filter(frnd=> frnd.length%2 ===0);
console.log(oddFriend);





//////find

const selected=players.find(player=> player>60)
console.log(selected);


// filter creates array of all the array element that fullfil the condition whereas find returns the first element who satisfy the condition, but not in array form just as single entity


// map --> iterates through all element of an array and runs operation on them and returns an array

// for each --> same as map but doesnot return anything

//filter --> returns array of element that full fill conditions
//returns empty array if no element

//find --> returns according to the condition and returns the first element that fulfills the condition.
//returns undefined if no condition satisfy