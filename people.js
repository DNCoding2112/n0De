const people=['yoshi','ryu','chun-li','mario'];
const ages=[20, 25, 30, 35];

console.log(people);

//single
// module.exports = people;

//multiple
module.exports={
    people:people, // can write only once if passed and parameter have same names
    ages:ages
};