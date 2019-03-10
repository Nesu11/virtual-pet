const Pet = require("../src/pet");

describe("Virtual Pet", () => {
  let pet;

  beforeEach(() => {
    pet = new Pet("monty");
  });

  // no need to for the double assertion
  it("returns an object", () => {
    expect(new Pet("monty")).toBeInstanceOf(Object);
  });

  it("sets the name property of pet", () => {
    expect(pet.name).toEqual("monty");
  });

  it("has a initial age of 0", () => {
    expect(pet.age).toEqual(0);
  });

  it("grouwUp: increments age by 1, hunger up by 5, fitness down by 3", () => {
    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });

  // if code is unnused or commented better to leave it out altogether
  // this test has am innacurate description
  it("Walk: keeps pet fitness at max if it's already maxed", () => {
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  // this test was missing
  it("Walk: increases pet fitness by 4 if less than max", () => {
    pet.fitness = 1;
    pet.walk();
    expect(pet.fitness).toEqual(5);
  });


  it("Feed: decreases pet hunger by 3, lowest level is 0", () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  // a better description was needed for this test
  it("Feed: decreases pet hunger by 3 if not at minimum level", () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  // this test was missing
  it("Feed: if allready at minimum hunger it does not inscrease", () => {
    pet.hunger = 0;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it("returns whether pet is hungry && needs a walk", () => {
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual("I am hungry and I need a walk");
  });

  it("returns whether pet needs a walk", () => {
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("checks whether pet is hungry", () => {
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual("I am hungryyy");
  });
  
  it("returns how pet is feeling", () => {
    expect(pet.checkUp()).toEqual("I feel Great");
  });

  it("returns whether pet isAlive", () => {
    expect(pet.isAlive).toBe(true);
  });

  it("returns whether pet isAlive: checks age, hunger,fitness", () => {
    pet.age = 30;
    pet.fitness = 10;
    pet.hunger = 0;
    expect(pet.isAlive).toEqual(false);
  });

  it("throws an error message if pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive.");
    expect(() => pet.walk()).toThrow("Your pet is no longer alive.");
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive.");
  });

  it("checkUp throws an error message if pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive.");
  });
  it("adds child object to Pet instance - this.children array", () => {});
  it("adoptChild method for having a baby- 2 Pet instance- parent and child", () => {
    const parent = new Pet("Dave");
    const child = new Pet("Amelia");
    parent.adoptChild(child);
    expect(parent.children).toEqual([
      { name: "Amelia", age: 0, fitness: 10, hunger: 0, children: [] }
    ]);
  });

  it("haveBaby method - adds child object to Pet instance - this.children array", () => {
    const parent = new Pet("Billy");
    parent.haveBaby("Dave");
    expect(parent.children).toEqual([
      { name: "Dave", age: 0, fitness: 10, hunger: 0, children: [] }
    ]);
  });
});
