/*
Part 4: Class Uniforms
Using static properties and methods, you can create uniform attributes for the class itself rather than
instances of the class. Static properties are typically constant values that can be used elsewhere for
reference, or utility methods that do not rely on the values of a specific class instance.
Using the static keyword:

Add a static MAX_HEALTH property to the Character class, equal to 100.
Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and
“Wizard.” Feel free to add other roles, if you desire!
Add a check to the constructor of the Adventurer class that ensures the given role matches
one of these values.
*/
class Character {
    //Adding static max_health
    static MAX_HEALTH = 100;

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
    //Static Roles for part 4
    static ROLES = ["Fighter", "Healer", "Wizard"]

    constructor (name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");

        //Check for the constructor to make sure Roles matches one of these values
        if(!Adventurer.ROLES.includes(role)){
            throw new Error( `Invalid role: ${role}. Role must be one of the alotted adventure roles ["Fighter", "Healer", "Wizard]`);
        }
       
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


console.log(robin.ROLES)