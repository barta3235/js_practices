function greeting(person,name){
    person(name);
}


function greetingHandler(name){
    console.log('Good morning',name);
}

function greetEvening(name){
    console.log('Good evening',name);
}

greeting(greetingHandler,'Ahnaf');
greeting(greetingHandler,'jake toms');

greeting(greetEvening,'Dyatlov');