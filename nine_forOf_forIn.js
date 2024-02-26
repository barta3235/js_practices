const numbers= [1,6,8,4];
for(const num of numbers){
    console.log(num);
}

const nobab= 'siraj ud daula';

for(const char of nobab){
    console.log(char);
}

const glass={
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true, 
}

for(const key in glass){
    console.log(key);
    console.log(glass[key]);
    console.log('---------');
}

const keys= Object.keys(glass);
console.log(keys);
