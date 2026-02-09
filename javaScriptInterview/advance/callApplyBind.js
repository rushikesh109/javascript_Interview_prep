const person = {
    name : "Rushi",
    greet(){
        console.log(`hello ${this.name}`);
        
    } 
}

let anotherPerson = person.greet
anotherPerson()
//storing the current value in another varible cause the context lose so we use the bind key word so the lose can not be happen


let thirdPerson = person.greet.bind({name : "hello"})
thirdPerson()
