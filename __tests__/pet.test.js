const Pet = require('../src/pet');
describe('Virtual Pet', () => {

    it('returns an object', () => {
  
      expect(new Pet('morty')).toBeInstanceOf(Object);
      expect(new Pet('Vinny')).toBeInstanceOf(Object)
  
    });
  
  });

  describe('constructor', () => {

    it('sets the name property', () => {
  
      const pet = new Pet('morty');
  
      expect(pet.name).toEqual('morty');
  
    });
  
  });
describe('constructor', () => {


  it('has a initial age of 0', () => {

    const pet = new Pet('morty');

    expect(pet.age).toEqual(0);

  });

});
describe('growUp', () => {

  it('increments the age by 1, gets unhealthier as it gets older', () => {

    const pet = new Pet('morty');

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);

  });

});
describe('walk', () => {
  it('increases pet fitness by 4 to max 10', () => {
    const pet = new Pet('morty');
    //pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  })
});

describe('feed', () => {
  it('decreases pet hunger by 3 to min 0', () => {
    const pet = new Pet('morty');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  })
});

describe('checkUp', () => {
 xit('checks how pet is feeling', () => {
    const pet = new Pet('morty');
    pet.checkUp();
    expect(pet.).toEqual();
  })
});


