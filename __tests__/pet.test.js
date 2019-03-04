const Pet = require('../src/pet');

describe('Virtual Pet', () => {
let pet;

beforeEach(() => {
 pet = new Pet ('monty')
});


    it('returns an object', () => {
      expect(new Pet('monty')).toBeInstanceOf(Object);
      expect(new Pet('Vinny')).toBeInstanceOf(Object)
    });



    it('sets the name property of pet', () => {
    expect(pet.name).toEqual('monty');
    });



    it('has a initial age of 0', () => {
    expect(pet.age).toEqual(0);
  });



  it('grouwUp: increments age by 1, hunger up by 5, fitness down by 3', () => {

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);


  });
  it('Walk: increases pet fitness by 4 to max 10', () => {
    //pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });


  it('Feed: decreases pet hunger by 3, lowest level is 0', () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });






  it('returns whether pet is hungry && needs a walk', () => {
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry and I need a walk');
  })
    it('returns whether pet needs a walk', () => {
       pet.fitness = 3;
       expect(pet.checkUp()).toEqual("I need a walk");    
     })
     it('checks whether pet is hungry', () => {
       pet.hunger = 5;
       expect(pet.checkUp()).toEqual('I am hungryyy');
     })
     it('returns how pet is feeling', () => {
       expect(pet.checkUp()).toEqual('I feel Great');
     });




     it('returns whether pet isAlive', () => {
      expect(pet.isAlive).toBe(true)
    });
      
    it('returns whether pet isAlive: checks age, hunger,fitness', () => {
      pet.age = 30
      pet.fitness = 10
      pet.hunger = 0
      expect(pet.isAlive).toEqual(false)
    });






    it('throws an error message if pet is not alive', () => {
     
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive.')
      expect(() => pet.walk()).toThrow('Your pet is no longer alive.')
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive.')
    });

    it('checkUp throws an error message if pet is not alive', () => {
     
      pet.age = 30;
      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive.')
    });
    })
