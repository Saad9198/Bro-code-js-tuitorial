// inheritance =  a child class can inherit all the 
//                methods and properties from another class

class Animal {
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`this ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = "rabbit";
   
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// Rabbit
console.log(`I am ${rabbit.name}`);
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();


// Fish
console.log(`I am ${fish.name}`);
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();


// Hawk
console.log(`I am ${hawk.name}`);
console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();


