// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


function findLowest(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}

console.log(findLowest([22,44,4,55,98]));



// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(members){
    let smallName=members[0];
    for(let i=0;i<members.length;i++){
         if(members[i].length<smallName.length){
              smallName=members[i];
         }
    }
    return smallName;
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallestName(heights2));





// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop,tablets,mobile){
    
     PL = 35000;
     PT = 15000;
     PM = 20000;

    const priceLaptop= laptop*PL;
    const priceTablet= PT*tablets;
    const priceMobile= PM*mobile;

    const total= priceLaptop+priceMobile+priceTablet;
    return total
}

console.log(calculateElectronicsBudget(10,5,7));






// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];



function findAveragePhonePrice(obj){
     const len= obj.length;
     let sum=0;
     for(let i=0;i<obj.length;i++){
         sum+=obj[i].price;
     }
     return sum/len;
}


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(findAveragePhonePrice(phones));





// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


// const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];

function calculateSalary(obj){
     let sum=0;
     let totalSum=0;

     for(let i=0;i<obj.length;i++){
         sum= obj[i].starting + obj[i].experience* obj[i].increment;
         totalSum=totalSum+sum;
     }
     return totalSum;
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

console.log('Total salary per month: ',calculateSalary(employees));