const numbers= [4,5,6,7,1,2,66];

const total =numbers.reduce((previous,current) => previous+current,0);

console.log(total);


const products=[
    {id:1 , name:'lenovo', price: 65000},
    {id:2 , name:'samsung', price: 85000},
    {id:3 , name:'oneplus', price: 95000},
    {id:4 , name:'macbook', price: 165000},
]

// map

const names=products.map(product=> product.name)
console.log(names);

const prices=products.map(price=>price.price);
console.log(prices);


//for each
products.forEach(product=> console.log(product.id));

//filter
const price90k= products.filter(product=> product.price>90000);
console.log(price90k);


//find
const affordable= products.find(product=>product.price<70000);
console.log(affordable);


//reduce
const totally= products.reduce((a,c) => a+c.price,0);
console.log(totally);

