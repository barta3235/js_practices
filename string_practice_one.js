// Count how many times a string has the letter a or A

const sentence= 'amar sonar bangla ami tomai bhAlobashi Aa';

let count=0;
for(let i=0;i<sentence.length;i++){
    if(sentence[i]==='a' || sentence[i]==='A'){
        count++;
        console.log('Index values: ',i);
    }
}

console.log('Final Count: ',count);






// Check whether a string contains all the vowels a, e, i, o, u

const sentence2= 'aawweyyippojju';

const sentence3= sentence2.toLowerCase();

if(sentence3.includes('a') && sentence3.includes('e') &&
sentence3.includes('i') &&
sentence3.includes('o') &&
sentence3.includes('u')){
    console.log("Contains all vowels");
}else{
    console.log("Doesnot contain all vowels");
}







//If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


const sentence4= "sopXXzhhxx";

const split= sentence4.split('');
if(split.includes('x') || split.includes('X')){

    for(let i=0;i<split.length;i++){
        if(split[i]==='x'){
            split[i]='y';
        }
        if(split[i]==='X'){
            split[i]='Y';
        }
    }
    const newSentence= split.join('');
    console.log(newSentence);

}else{
    console.log("Given letters not present");
}







// Task-5:
// Capitalize Every first Letter of each word in a String

let fullSentence= "Ahnaf has many shits going around";

// sppliting the sentence into array of words
let fullSentenceArray= fullSentence.split(' ');

let newly=[];

for(let word in fullSentenceArray){
    
    // accessing each word and making each word an array and 
    let x=fullSentenceArray[word].split('');
    
    // hence making first item of array go uppercase
    x[0]=x[0].charAt(0).toUpperCase();
    
    //each word that had been converted into array is joined back into a string
    temp=x.join('');

    //pushing all the new words into a new array.
    newly.push(temp);
}
//making the newly names array a string and replacing it into the main string.
fullSentence= newly.join(' ');
console.log(fullSentence);