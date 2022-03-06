class Animals {
    constructor(name) {
        this.name = name
    }
    runnning () { 
        return this.name + " is running"
    }
}

class Dog extends Animals {
    constructor(name, bread) {
        super(name)
        this.bread = bread
    }
    whoIsThis () {
        console.log("this is " + this.name)
        return this
    }
    whatBread() {
        return this.bread
    }
   
}

let max = new Dog("max", "corgi");

console.log(max.whoIsThis().runnning())