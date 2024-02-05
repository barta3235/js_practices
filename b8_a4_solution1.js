// function will receive a parameter which will be a number

//convert the number to cube.
// return the number
// return error message if get other data type other than number 



//make cube of a function
function cubeNumber(number){
    if(typeof number !== 'number'){
        return "Please provide a number";
    }
    const result= Math.pow(number,3);
    return result;
}

console.log(cubeNumber(4));