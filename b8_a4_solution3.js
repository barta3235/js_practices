//make a function named as sortMaker(), which will take an array as input
//access the elements of the input array 
//if any element is negative, return invalid input
//if elements equal, return "equal"
//if element not equal, return in descending order



function sortMaker(arr){
    const [a,b]=arr;
    if(a<0 || b<0){
        return "Invalid Input";
    }else if(a==b){
        return "equal";
    }else if(a>b){
        return [a,b];
    }else if(a<b){
        return [b,a];
    }else{
        return [a,b];
    }
}

console.log(sortMaker([3,2]));
console.log(sortMaker([2,3]));
console.log(sortMaker([2,-3]));
console.log(sortMaker([3,3]));
console.log(sortMaker([1,2]));
console.log(sortMaker([-2,9]));
console.log(sortMaker([0,1]));