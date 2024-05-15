//importing people one method
// const xyz = require('./people');

//importing specific components of people
const {ages, people} = require('./people');//sequence doesnt matter as long as name is passed

//return object recieved in exports method one
// console.log(xyz.people, xyz.ages);

console.log(people,ages);

//importing prebuilt module os
const os = require('os');
console.log(os);
console.log(os.platform(),os.homedir());