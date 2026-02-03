function Details(name, mail) {
    this.name = name;
    this.mail = mail
}

let myDetails = new Details("rushi", "man@gmail.com")
console.log(myDetails);


function tea(type) {
    this.type = type
    this.describe = () => {
        return `this is a cup of ${this.type}`
    }
}

const lemonTea = new tea("lemon tea")
console.log(lemonTea.describe());

class TeaStall {
    constructor(vendorName, teaPrice, paymentMethod) {
        this.vendorName = vendorName;
        this.teaPrice = teaPrice;
        this.paymentMethod = paymentMethod;
        this.isOpen = false;
    }
    checkStatus(isOpen) {
        this.isOpen = isOpen

        if (isOpen === false) {
            return `shop is closed`
        } else if (isOpen === true) {
            return `shop is open`
        } else {
            return `provide true || false`
        }
    }
}

const shambhoStall = new TeaStall("rushi", "💲10", "Online")
console.log(shambhoStall);
console.log(shambhoStall.checkStatus(true));


class Animal {
    constructor(species) {
        this.species = species;
    }
    sound() {
        return `${this.species} makes a sound`
    }
}

let dog = new Animal("Dog")
console.log(dog.sound());

let cat = new Animal("Cat")
console.log(cat.sound());


//Error handling for new

class Drink {
    constructor(name) {
        if (!new.target) throw new Error("Drink must be called with new keyword")
        this.name = name
    }
}

let s = new Drink("tea")
let b = Drink("coffee")