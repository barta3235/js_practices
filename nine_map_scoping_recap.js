  const num= [23,44,55,10,90];

  const ex= num.map((item,index)=> `Index: ${index} and the corresponding value: ${item}`);

  console.log(ex);



  {
    var x=9;
  }
  console.log(x);
  // here the var x is hoisted hence outside the block it is accessible


  function yo(){
    var y=10;
    console.log(y);
  }
  yo();
//   console.log(y);
  // here the console.log(y) will give error because the 
  // var y is hoisted,yes, but to the top of the function
  // outside the functional block the var is not accessible
  
  

const func1= ()=>{
     let count=0;


     const func2= ()=>{
        count++;
        console.log(count);
     }

     return func2;
}

const x1= func1();
console.log(x1);
x1();
x1();




const person={
  name: "Ahnaf",
  id:1234,
}

const identity = ({name,id}) => {
   console.log(name);
   console.log(id);
}

identity(person);
