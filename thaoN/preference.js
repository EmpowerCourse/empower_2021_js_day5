const readline = require('readline');
let whatAmI = [
    { flavor: "strawberry", preferenceSequence: 4 },
    { flavor: "vanilla", preferenceSequence: 2 },
    { flavor: "pineapple", preferenceSequence: 1 },
    { flavor: "raspberry", preferenceSequence: 3 }
];

for (let i = 0; i < whatAmI.length; i++) {
    if (whatAmI[i].preferenceSequence <= 2) {
        console.log(`I really like ${whatAmI[i].flavor}!`);
    } else {
        console.log(`I do NOT like ${whatAmI[i].flavor} :(`);
    }
}

function someFunction(f) {
    return f.flavor !== "pineapple";
}

function sortByFlavor(a, b) {
    let nameA = a.flavor.toUpperCase(); // ignore upper and lowercase
    let nameB = b.flavor.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
}
whatAmI.sort(sortByFlavor);

const flavorNames = whatAmI.map(f => f.flavor.toUpperCase());

const someOtherFunction = function (f) {
    return f.flavor !== "pineapple";
}

const otherOtherFunction = f => f.flavor !== "pineapple";

// sorting based on preference sequence
// let newWhatAmI = [];
// for (let i = 0; i < whatAmI.length; i++) {
//     newWhatAmI[whatAmI[i].preferenceSequence - 1] = whatAmI[i];
// }
// console.log(newWhatAmI);

// another way to sort (perhaps easier way)
whatAmI.sort((a, b) => a.preferenceSequence - b.preferenceSequence);
whatAmI = whatAmI.filter(f => f.flavor !== "pineapple");

for (let i = 0; i < whatAmI.length; i++) {
    console.log(`${whatAmI[i].flavor} is #${whatAmI[i].preferenceSequence}`);
}

function findPreferenceSequence(preferenceName) {

}
