//define a function named as findAddress() which will take an object as input
//access the elements of the object
//form the string as the given sample
//replace the missing property with double underscore __

function findAddress(obj){
     const street= obj.street || "__";
     const house= obj.house|| "__";
     const society=obj.society|| "__";

     const str= street+","+house+","+society;

     return str;
}

console.log(findAddress({street:10,house:"15A",society:"Earth Perfect"}));

console.log(findAddress({street:10,society:"Earth Perfect"}));