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

class AdventurerFactory {
    constructor (role) {
    this.role = role;
    this.adventurers = [];
    }
    generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
    return this.adventurers[index];
    }
    findByName (name) {
    return this.adventurers.find((a) => a.name === name);
    }
   }


   const healers = new AdventurerFactory("Healer");
   const robin = healers.generate("Robin");

   console.log(robin)
   console.log(healers)