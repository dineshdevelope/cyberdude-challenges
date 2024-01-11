# Loops (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task#5: Create a Array of Objects and loop through it. various looping options

> - For Loop [For..in , For..of , ForEach]
> - For in - > used to itterate obj keys
> - For of - > used to itterate array
> - foreach - > used to itterate array
> - While Loop
> - Do-While Loop
> - map - > used to itterate array and return array

```js
const companyCeo = [
  {
    id: 1,
    name: "Sundar Pichai",
    company: "Google",
    role: "CEO",
    year: 2015,
  },
  {
    id: 2,
    name: "Satya Nadella",
    company: "Microsoft",
    role: "CEO",
    year: 2014,
  },
  {
    id: 3,
    name: "Parag Agrawal",
    company: "Twitter",
    role: "CEO",
    year: 2021,
  },
  {
    id: 4,
    name: "Shantanu Narayen",
    company: "Adobe Inc",
    role: "CEO",
    year: 2017,
  },
  {
    id: 5,
    name: "Arvind Krishna",
    company: "IBM",
    role: "CEO",
    year: 2020,
  },
  {
    id: 6,
    name: "Sanjay Mehrotra",
    company: "Micron Technology",
    role: "CEO",
    year: 2017,
  },
];

//For Loop is used to repeatedly execute a block of code as untill the condition is false
/* syntax:
 for (initial value; condition; iteration) {
 code to be executed
} */

for (i = 0; i < companyCeo.length; i++) {
  console.log("For-Loop :", companyCeo[i]);
}

//For..in
/* yntax:
  for (let variableName in ObjName) {
 code to be executed
} */

//to get the position [index]
for (let key in companyCeo) {
  console.log("For...in Index", key);
}
//to get the values
for (let key in companyCeo) {
  console.log("For..in Value", companyCeo[key]);
}

//For..of
/* syntax: */
// for (let variableName of ObjName) {
// code to be executed
//}

//to get the value directly
for (let key2 of companyCeo) {
  console.log("For..of", key2);
}

//For..Each
/* syntax:
ObjName.forEach((variableName) => {
console.log(variableName);
console.log(variableName.keyName)
//}); */

companyCeo.forEach((each) => {
  console.log("For-Each", each.name);
});

//While-Loop
/* syntax:
initial value;
while(condition){
 code to be executed
iteration;
} */

let j = 0;
while (j < companyCeo.length) {
  console.log("While Loop:", companyCeo[j]);
  j++;
}

/* Do-While */
/* do{
 code to be executed
iteration;
}while (condition) */
syntax: k = 4;
do {
  console.log("Do-While Loop:", companyCeo[k]);
  k++;
} while (k < 2);

//  Map
//syntax
//ObjName.map(variableName=>variableName.keyName)
const mapFunction = companyCeo.map((key) => key.company);
console.log("Map-Function", mapFunction);
```
