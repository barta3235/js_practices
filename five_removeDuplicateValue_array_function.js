// remove duplicates from array 




function noDuplicate(array){
    const unique=[];
    for(const item of array){
        if(unique.includes(item)=== false){
            unique.push(item);
        }
     }

     return unique;
}


const biriyaniKhor= ['abul','labul','cabul','abul','babul','dabul'];

const numbner=[1,5,61,5,87,7,5,81,61];

const uniqueArray= noDuplicate(biriyaniKhor);
console.log(uniqueArray);