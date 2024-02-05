//write a function named as matchFinder() that will take two string inputs
// we will try to find match between the two strings
//if matches return true else return false
// if both string are not string return error message.


function matchFinder(str1,str2){
     
    if(typeof str1 !=='string' || typeof str2 !=='string'){
        return "Please specify string as parameter";
    }
    const result= str1.includes(str2);
     return result;
}

console.log(matchFinder('John Doe','ohn'));
console.log(matchFinder('Javascript','Code'));
console.log(matchFinder('Javascript',2));
console.log(matchFinder([3,2,3],'ddd'));