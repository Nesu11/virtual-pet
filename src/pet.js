
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
this.fitness = maximumFitness;}

Pet.prototype = { 
    get  isAlive() {
        return this.age < maximumAge && this.hunger < maximumHunger && this.fitness > mimimumFitness ;
    }
 };

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3
};

Pet.prototype.walk = function() { 
    if ((this.fitness + 4) <= maximumFitness) {
        this.fitness += 4;
    } else {
      this.fitness = maximumFitness
    }
};

Pet.prototype.feed = function () {
    if((this.hunger - 3) >= minimumHunger) {
        this.hunger -= 3} else {
            this.hunger = minimumHunger
        }
    };



Pet.prototype.checkUp = function () {
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
    
    
   
  


   


module.exports = Pet;