let roomThings = [
    "flag",
    "chairs",
    "other flag",
    "desk",
    "table",
    "blake",
    "1 single frederick only",
    "clock"
];

// // add things to the array
// roomThings.push("banjo");

// // remove things
// roomThings.splice(3, 1);

// // creating a new array
// const roomThingsCopy = roomThings.slice();

// roomThingsCopy[0] = "cat";

// console.log(roomThings);
// console.log(roomThingsCopy);

let flags = [];

// different types of function
function addFlag(t) {
    if (t.includes("flag")) flags.push(t);
} 

const addFlag2 = function(t) {
    if (t.includes("flag")) flags.push(t);
} 

const addFlag3 = t => {
    if (t.includes("flag")) flags.push(t);
} 

// roomThings.forEach(t => {
//     if (t.includes("flag")) flags.push(t);
// });

roomThings.forEach(addFlag);

console.log(flags);