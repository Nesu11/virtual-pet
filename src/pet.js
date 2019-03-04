
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
this.children = []
}

Pet.prototype = { 
    get  isAlive() {
        return this.age < maximumAge && this.hunger < maximumHunger && this.fitness > mimimumFitness ;
    }
 };

 /*const isDead = function () {
     if (!this.isAlive) {
         throw new Error('Your pet is no longer alive.')
     }
 }*/

Pet.prototype.growUp = function() {
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
      } else 

    if((this.hunger - 3) >= minimumHunger) {
        this.hunger -= 3} else {
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