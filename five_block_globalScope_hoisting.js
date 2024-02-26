function add(a,b){
  const total=a+b;
  console.log(a,b);
  if(b>5){
    const sum=25+a+b;
  }else{
    const sum= 5+a +b;
    var current=sum;
  }
  console.log(current);
  return total;
}

add(5,9);

// if we use var top declare a variable, const let maintains block where as when we use var, the variable is taken to the top of the function (hoisting) (doesnot maintain block scope)

// any variable written as var will be hoisted (the declaration will be moved to the top of the function)



for(var i=0;i<5;i++){
    console.log(i);
}
console.log('outside',i);

// here the i is hoisted outside the for loop as it is declared as var

for(let j=0;j<5;j++){
    console.log(j);
}
// console.log('outside',j);

// here the j is not hoisted outside the for loop hence the console.log(j) will give error


function print5(){
    console.log(5);
}

// here the entire function print5() is hoisted; that means can be access and used anywhere in the code 


const print10= function(){
    console.log('inside print 10 function',10);
}

// here print10() will give error if it is called before the initialization; if the function is called after initialization then there will be no error



