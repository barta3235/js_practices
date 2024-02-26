const first = '0';
const second =false;
if(first===second){
    console.log('values are equal');
}else{
    console.log('not equal');
}


//  type coercion
//type conversion

// for non primitive as in object array the == and === 
//checks for reference of both, == and === are applicable for primitive datatype.
const one={id:1};
const two={id:1};
if(one===two){
    console.log('values are equal');
}else{
    console.log('not equal');
}


// three and four refer to the same memory location
const three={id:1};
const four=three;
if(three===four){
    console.log('values are equal');
}else{
    console.log('not equal');
}


