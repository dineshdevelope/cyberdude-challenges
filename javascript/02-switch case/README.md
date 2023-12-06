# Task #2: Switch Statement (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

```javascript
/* switch (expression) {
  case value1:
    // code to be executed if expression is equal to value1
    break;
  case value2:
    // code to be executed if expression is equal to value2
    break;
  // Additional cases as needed
  default:
    // code to be executed if none of the cases match the expression
} */

let currentDay = new Date().getDay();
console.log(currentDay);

switch (currentDay) {
  case 1:
    console.log("Today Is Monday");
    break;
  case 2:
    console.log("Today Is Tuesday");
    break;
  case 3:
    console.log("Today Is Wednesday");
    break;
  case 4:
    console.log("Today Is Thursday");
    break;
  case 5:
    console.log("Today Is Friday");
    break;
  case 6:
    console.log("Today Is Saturday");
    break;
  case 7:
    console.log("Today Is Sunday");
    break;
  default:
    console.log("Invalid Selection");
}
```

### Live link ->

[Demo Link]()

## References:

[![Switch Statement Code Review) code review](https://i.ytimg.com/vi/5TlFwbbuGFA/maxresdefault.jpg)](https://www.youtube.com/watch?v=-_8fbcy-TKY "Switch Statement")
