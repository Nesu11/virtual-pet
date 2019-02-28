
const maximumFitness = 10; 
const minimumHunger = 0;
const maximumHunger = 10;

function Pet(name) {
this.name = name;
this.age = 0;
this.hunger = 0;
this.fitness = 10;}
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
	
	    if (this.fitness <= 3) {
	        return "I need a walk";
	    }
	   if (this.hunger >= 5) {
           return 'I am hungryyy';
       }
       if ((this.fitness <= 3 ) && (this.hunger >= 5)) {
           return 'I am hungry and I need a walk';
       } else {
           return 'I feel Great';
       }	   
	};



module.exports = Pet;