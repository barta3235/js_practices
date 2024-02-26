//Truthy:
// 1. true
//2. any number (+ve,-ve) will be truthy other than 0
// 3. any string is truthy except for empty string
// 4. '0', 'false'
//5. any object including empty object
//6. any array including empty array


//falsy:
//1. false
//2. 0
//3. empty string ('')
//4. undefined***
//5. null


let x=[];
if(x){
    console.log('value of x is truthy');
}else{
    console.log('value of x is falsy'); 
}



//check falsy
const y=''
if(!y){
    console.log('Value is falsy');
}

//check truthy
const z=' '
if(!!z){
    console.log('Value is truthy');
}