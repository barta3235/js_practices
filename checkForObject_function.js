function check(obj){
    if(typeof obj !=='object' || Array.isArray(obj) ){
        return 'Not an object';
    }else if(!obj.name || !obj.age){
        return 'All Properties not defined';
    }else if(typeof obj.name!=='string' || typeof obj.age!=='number'){
        return 'Type problem for properties of objects';
    }else{
        return `Name is: ${obj.name} and Age is: ${obj.age}`;
    }
}

console.log(check({name:'Ahnaf' ,age: 23}));

console.log(check({name:'Ahnaf' ,age: 'gg'}));
console.log(check(['Hanf',23]));

console.log(check({name:'Ahnaf'}));