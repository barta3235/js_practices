const address = 'andorkilla';

const part= address.slice(0,5);
console.log(part);

//split
const sentence= "I am a good hard working person"

console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friends= 'Rahim,karum,jarim,barim,farin';

const frnd= friends.split(',');
console.log(frnd);
console.log(typeof friends);
console.log('---------------------------');
console.log(typeof frnd);


//join  array to string

const realFriends= [ 'Rahim', 'karum', 'jarim', 'barim', 'farin' ];

const realfrnd=realFriends.join('|')
console.log(realfrnd);
console.log(typeof realfrnd);


//concat
const first='Abid';
const last= 'nabid';

console.log(first.concat(' '+last));


//includes

console.log(last.includes('d'));