// great use of global constants, this is a good way of keeping code
// organised, consistent and easily maintainable. Only comment is that
// convention states that it's better to use ALL_CAPS for naming
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

const maximumFitness = 10; 
const mimimumFitness = 0
const minimumHunger = 0;
const maximumHunger = 10;
const maximumAge = 30
const initialAge = 0

function Pet(name) {
    this.name = name;
    this.age = initialAge;
    this.hunger = minimumHunger;
    this.fitness = maximumFitness;
    this.children = [];
}

Pet.prototype = { 
    get isAlive() {
        return this.age < maximumAge && this.hunger < maximumHunger && this.fitness > mimimumFitness ;
    }
 };

 // it's a great idea to check if "it's not alive then throw an error" as its own function, instead of
 // repeating the same code throughout the other methods. I can see what you're attempting to do with this, shame
 // you didn't pursue it any further! :)

 // below example of how I would implement it plus how we could use it - lines 39 - 45 and 48

 /*const isDead = function () {
     if (!this.isAlive) {
         throw new Error('Your pet is no longer alive.')
     }
 }*/

//  Pet.prototype = {
//     checkIfAlive() {
//         if (!this.isAlive) {
//             throw new Error('Your pet is no longer alive.')
//         }
//     }
// }

Pet.prototype.growUp = function() {
    // this.checkIfAlive();

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive.')
    }

    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3
};

Pet.prototype.walk = function() { 
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive.')
    } else 

    if ((this.fitness + 4) <= maximumFitness) {
        this.fitness += 4;
    } else {
      this.fitness = maximumFitness
    }
};

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive.');
    } else if((this.hunger - 3) >= minimumHunger) {
        this.hunger -= 3
    } else {
        this.hunger = minimumHunger
    }
};

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive.')
    }
    
    if ((this.fitness <= 3 ) && (this.hunger >= 5)) {
        return 'I am hungry and I need a walk';
    } else if (this.fitness <= 3) {
        return "I need a walk";
    } else if (this.hunger >= 5) {
        return 'I am hungryyy';
    } else {
        return 'I feel Great';
        }	   
    };
    
Pet.prototype.adoptChild = function (child) {
    this.children.push(child)
}
Pet.prototype.haveBaby = function (babyName) {
    const child = new Pet(babyName)
    this.children.push(child)
}

module.exports = Pet;