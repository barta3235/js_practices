// make a function named canPay() that will take two input parameters
// find sum of the elements of the array
//if the sum of the element is greater than or equal second input parameter 
//else return false

// if first input parameter is an empty array, return error message


function canPay(changeArray, totalDue){
    
    if(changeArray.length==0){
        return "Your array is empty";
    }
    
    let sum=0;
    for(let i=0;i<changeArray.length;i++){
        const element= changeArray[i];
        sum+=element;
    }

    if(sum>=totalDue){
        return true;
    }else{
        return false;
    }

}

console.log(canPay([1,2,5],10));