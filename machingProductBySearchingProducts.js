const prods= [
    {id:1, name: "walton1", price:1200},
    {id:2, name: "iphone", price:1300},
    {id:3, name: "lenovo", price:1400},
    {id:4, name: "Iphone", price:1500},
    {id:5, name: "Waltton", price:1600},
    {id:6, name: "Dell", price:1700},
    {id:7, name: "dell", price:1800},

]

//to check if a string is present within a string using indexOf or includes

function matchedProducts(products, search){
    const matched=[];
    for(const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
         matched.push(product);
       }
    }
    return matched;
} 

console.log(matchedProducts(prods,'dell'))