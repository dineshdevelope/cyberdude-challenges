const people = {
  name: "Dinesh",
  age: 25,
  isAlive: true,
  interst: ["FrondEnd", "BackEnd"],
  address: {
    city: "Namakkal",
    state: "TamilNadu",
  },
  peopleFunction() {
    const result = `Your Name Is ${this.name} and your age is ${this.age}`;
    return result;
  },
};

//Create
people.msg = "Hi EveryOne";
console.log(`Create Object ${people.msg}`);
//Read
console.log(people.peopleFunction());
//Update
people.age = 27;
console.log(`Update Object ${people.age}`);
//Delete
delete people.isAlive;
console.log(`Delete Object:${people.isAlive}`);
