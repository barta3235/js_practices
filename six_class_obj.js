const products=[
    {id:1 , name:'lenovo', price: 65000},
    {id:2 , name:'samsung', price: 85000},
    {id:3 , name:'oneplus', price: 95000},
    {id:4 , name:'macbook', price: 165000},
]


//has some properties, method
class Product{

    country= 'bangladesh';

    constructor(name){
          this.name=name
    }

    speak(talk='No text'){
          console.log(`taking about ${talk}`);
    }
}

const lenovo = new Product('le le lenovo');
console.log(lenovo);
lenovo.speak();



class Teachers{

    constructor(subject,institute){
        this.subject=subject;
        this.institute=institute;
    }

    lecture(){
        console.log('TEaching math');
    }
}

const teacher = new Teachers('Math','DMP');
console.log(teacher);