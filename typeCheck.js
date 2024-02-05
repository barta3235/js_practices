// Handle Unexpected Function Input Parameter Error

 

function checkTypeNumber(num){
    if(typeof num !== 'number'){
        console.log('Provide numeric value');
    }else{
        console.log('All good',num);
    }
}

checkTypeNumber('8');







function checkTypeString(str1,str2){
    if(typeof str1!== 'string' || typeof str2!== 'string'){
        console.log("Not a valid String")
    }else{
        console.log('Your name is: '+str1+" "+str2);
    }
}

checkTypeString('Ahnaf', 2);
checkTypeString('Ahnaf', 'Daiyan');




function checkTypeArray(arr){
    if(Array.isArray(arr)===true){
        console.log('this is array');
    }else{
        console.log('Not array');
    }
}

checkTypeArray([2,3,4,5]);
checkTypeArray(33);