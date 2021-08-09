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

function findPreferenceSequence(preferenceName) {
    
}
