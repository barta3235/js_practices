const products=[
    {name:'shampoo',price: 300,quantity:5},
    {name:'comb',price: 100,quantity:10},
    {name:'shirt',price: 700,quantity:2},
    {name:'pant',price: 800,quantity:8},
    {name:'shoe',price: 1200,quantity:2},
    {name:'socks',price: 50,quantity:2},
]

function getShoppingTotal(products){
    let sum=0; 
    for(const product of products){
        const thisProduct= product['price']*product['quantity'];
        sum=sum + thisProduct;
     }
     return sum;
}

const total= getShoppingTotal(products);
console.log("Total Cost: ",total);