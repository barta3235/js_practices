class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sleep(){
        console.log(`sleeping now ${this.name}`);
    }

    activity(){
        this.sleep();
    }
}

const kodom= new Person('Kodom Ali', 33);
console.log(kodom);
kodom.sleep();

const badam= new Person('Kacha Badam',33);
badam.sleep();


// dot

const person={
    name: 'aaa',
    job: 'dkd',
}

console.log(person.job);
console.log(person['job']);
