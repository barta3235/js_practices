const school= 'RAJ UK SCHOOL';

const subject= 'Chemistry';
const book= 'chemistry';


// upper lower case issue

if(subject === book){
    console.log('Same');
}else{
    console.log('Not same');
}



if(subject.toLowerCase() === book.toLowerCase()){
    console.log('Same');
}else{
    console.log('Not same');
}


///white space issue

const drink = ' water';
const liquid= '   water  ';

if(drink === liquid){
    console.log('Same');
}else{
    console.log('Not same');
}


if(drink.trim() === liquid.trim()){
    console.log('water Same');
}else{
    console.log('water Not same');
}

