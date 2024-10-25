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
        return result;
        }
     
    }
    
}

class Adventurer extends Character {
    //Static Roles for part 4
    static ROLES = ["Fighter", "Healer", "Wizard" ]

    constructor (name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");

        //Check for the constructor to make sure Roles matches one of these values
       /* if(!Adventurer.ROLES.includes(role)){
            throw new Error( `Invalid role: ${role}. Role must be one of the alotted adventure roles ["Fighter", "Healer", "Wizard"]`);
        }*/
    }
    
    
    // Adventurers have the ability to scout ahead of them.
    scout () {
    console.log(`${this.name} is scouting ahead...`);
    //super.roll(); caused errors when I ran it 
    }

    swim(){
        console.log(`${this.name} is going for a swim  `);
    }
    //Part 6 Developing Skills
    duel(Adventurer){
        console.log(`Welcome to the duel between ${this.name} and ${Adventurer.name}`);
        let currRound = 1;

        while( this.health > 50 && Adventurer.health > 50 ){
            console.log(`\nRound: ${currRound}`)
            let roll1 = this.roll();
            let roll2 = Adventurer.roll();
        
            if(roll1 > roll2){
                Adventurer.health -= 1;
                //console.log(`${this.name} rolls ${roll1} \n ${Adventurer.name} rolls ${roll2}.`)
            }

            if(roll2 > roll1){
                this.health -= 1;
              //  console.log(`${this.name} rolls ${roll1} \n ${Adventurer.name} rolls ${roll2}.`)
            }
           else if (roll1 === roll2) {
                console.log(`Both players rolled the same number. No health was lost`)
            }
            currRound++;
            console.log(`${this.name} has a health of ${this.health}` )
            console.log(`${Adventurer.name} has a health of ${Adventurer.health}` )
            
        }
        let winner = "";
        
        if(this.health > Adventurer.health){
            winner = this.name;
        }
        else{ winner = Adventurer.name;}
        console.log('\nThe winner of this duel is ' + winner );
        

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

const robin2 = new Adventurer("Robin2");
robin2.inventory = ["sword", "potion", "artifact"];
robin2.companion = new Character("Mr.Goat");
robin2.companion.type = "Goat";
robin2.companion.companion = new Character("The Rock");
robin2.companion.companion.type = "A literal Rock";
robin2.companion.companion.inventory = ["small hat", "sunglasses"]


console.log(robin.duel(robin2))