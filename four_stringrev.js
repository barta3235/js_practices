const sentence = 'I am learning web dev';


let reverse='';
for(let i of sentence ){
    reverse =  i+reverse;
}
console.log(reverse);


////////////////////////
let rev='';
for(let i=0;i<sentence.length;i++){
    const letter= sentence[i];      
    rev= letter+rev;                
}
console.log(rev);


//////////////////////////////

const reversed= sentence.split('').reverse('').join('');
console.log(reversed);
console.log(typeof reversed);