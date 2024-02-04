const mobiles=[{name:'samsung',price:90000, camera:'12mp',color:'black'},
{name:'xaomi',price:24000, camera:'12mp',color:'black'},
{name:'oppo',price:33000, camera:'12mp',color:'black'},
{name:'Iphone',price:112000, camera:'12mp',color:'black'},
{name:'walton',price:10200, camera:'12mp',color:'black'},
{name:'htc',price:100000, camera:'12mp',color:'black'}];



function getCheapestPhone(phones){
    let min=phones[0];
    for(const phone of phones){
       if(phone.price<min.price){
         min=phone
       }
    }
    return min;
}

const cheapest=getCheapestPhone(mobiles);
console.log(cheapest);