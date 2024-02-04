//multi layer discount system

// first 100 ---> 100tk
//101 to 200----> 90tk
//above 2000 --->70tk


function layeredDiscountTotal(quantity){
    const first100= 100;
    const second100= 90;
    const above200= 70;

    if(quantity<=100){
        const total= quantity*first100;
        return total;
    }else if(quantity<=200){
        const first100Price= 100*first100;
        const remaining= (quantity - 100)*second100;
        return first100Price+remaining;
    }else{
        const first100Price=100*first100;
        const second100Price= 100* second100;
        const remaining= (quantity-200)*above200;
        return first100Price+second100Price+remaining;
    }
}

console.log(layeredDiscountTotal(100));