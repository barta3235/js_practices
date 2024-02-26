// default --> if value not provided, take this a default value


function add(num1=1,num2=0){
    const result= num1+num2;
    console.log(num1,num2,result);
    return result;
}


const sum= add();


function fullName(first,last=''){
    const full = first + ' ' + last;
    return full;
}

console.log(fullName('ahnaf'))


function friends(numbs=[]){

}

function person(human={}){
    
}