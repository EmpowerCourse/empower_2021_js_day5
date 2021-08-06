import condos from "./blake_home.js";
const firstItemId = "firstItem";
function whatsInBlakesFridge() {

    console.log("whatsInBlakesFridge??");

    // console.log(condos);

    const list = document.getElementById("fridgeList");
    const newItem = document.createElement("li");
    newItem.innerHTML = condos[623].e.tenant + "'s Stuff";
    newItem.id = firstItemId;
    list.appendChild(newItem);


    // add more function calls

};

function findThermometer() {

}

function addFridgeList() {
    for (let i = 0; i < condos[623].e.kitchen.refrigerator.length; i++) {

    }
}

function addFridgeList2() {
    const myArray = condos[623].e.kitchen.refrigerator;
    const list = document.getElementById("fridgeList");
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
        const newItem = document.createElement("li");
        newItem.innerHTML = myArray[i];
        list.appendChild(newItem);
    }
}

function countFridgeStuf() {

}

addFridgeList2()
whatsInBlakesFridge();