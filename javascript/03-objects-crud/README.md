# Object CRUD (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3: Object CRUD

```javascript
// simple Object CRUD  statement practice

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
```

### Live link ->

[Demo Link]()

## References:

[![Object CRUD  code review](https://i.ytimg.com/vi/4SAETZ1ojbQ/maxresdefault.jpg)](http://www.youtube.com/watch?v=4SAETZ1ojbQ "Object CRUD  code review Cyberdude youtube Live")
