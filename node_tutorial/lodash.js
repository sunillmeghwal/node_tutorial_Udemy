
import _ from 'lodash';




// const notes = require("./notes.js");
// var_ = require("lodash");
// console.log("server file is available");
// var age = notes.age;
// var result = notes.addNumber(age + 18, 10);
// console.log(age);
// console.log("result is now " + result);

const data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
const filter = _.uniq(data);
console.log(filter);


