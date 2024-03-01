const user = {id:1, name: 'Gorib amir',job:'actor'};
const stringifyfield= JSON.stringify(user);
console.log(stringifyfield);

console.log(' ');

const shop={
    owner: 'Alia',
    address:{
        street: 'Kochu khet bhuter goli',
        city:'mumbai',
        country: 'BD'
    },
    products: ['laptop','mobile','monitor'],
    revenue: 450000,
    isOpen:true,
    isNew:false,
}

//stringify converts JS variables to JSON

const shopJSON= JSON.stringify(shop);
console.log(shopJSON);
console.log('Shop type: ',typeof shop);
console.log('shopJSON type: ',typeof shopJSON);


console.log(' ');
console.log(' ');
// parse is used to get the original JS variable form JSON
const shopObj= JSON.parse(shopJSON);
console.log(shopObj);