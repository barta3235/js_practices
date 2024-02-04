const jim=56;
const tim= 89;
const kim =68;


function whoIsTheBoss(jim,tim,kim){
    if(jim>tim && jim>kim){
        console.log("Jim is the boss");
    }else if(tim>jim && tim>kim){
        console.log("Tim is the boss");
    }else{
        console.log("Kim is the boss");
    }
}

whoIsTheBoss(jim,tim,kim);

// js method
const max= Math.max(jim,tim,kim);
console.log(max);


