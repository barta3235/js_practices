console.log(1);
console.log(2);
setTimeout(()=>{   // this will run asynchronously
    console.log(3)  
},5000);
console.log(4);
console.log(5);

let num=0
const clockId= setInterval(()=>{  // set interval runs continuosly
    num++;
    console.log('i am you',num);
    if(num>=5){
        clearInterval(clockId);
    }
},3000)
console.log(6);