/* 
Part 3: Class Features
When extending a class, the “child” class inherits all properties of its parents. This means that we do
not need to account for the name, health, inventory, or roll method of Character children classes.
Let’s begin by creating an Adventurer class. What attributes might be specific to an adventure, but
that not all characters have? Take a look at our example below, and expand upon it with your own
properties and methods
*/
class Character {
    //Creating a constructor class Aka the default template that all characters use
    constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];

    this.roll = function(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }
}

class Adventurer extends Character {
    constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
    console.log(`${this.name} is scouting ahead...`);
    //super.roll(); caused errors when I ran it 
    }

    swim(){
        console.log(`${this.name} is going for a swim  `);
    }
   }

class Companion extends Character{
    constructor(name, role){
        super(name)
        this.role = role;
    }

    nap(){
        console.log(  `${this.name} is taking a nap... `);
    }

    eat(){
        console.log('Yummmy, this food is so good');
    }

}

const robin = new Adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"]

const robin1 = new Character("Batman");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"]

const Joe = new Companion("Joe");
Joe.inventory = ["sword", "potion", "artifact"];
Joe.companion = new Character("Leo");
Joe.companion.type = "Cat";
Joe.companion.companion = new Character("Frank");
Joe.companion.companion.type = "Flea";
Joe.companion.companion.inventory = ["small hat", "sunglasses"]

robin.scout();
console.log(robin.roll())
console.log(robin.inventory)
//console.log(robin.scout());
console.log(robin1.roll())
robin.swim();
Joe.nap();
Joe.eat();


const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"]

console.log(robin.roll())
console.log(robin.companion.roll())
console.log(robin.companion.companion.roll())