import condos from "./blake_home.js";
const firstItemId = "firstItem";
function whatsInBlakesFridge() {

    const list = document.getElementById("fridgeList");
    const newItem = document.createElement("li");
    newItem.innerHTML = condos[623].e.tenant + "'s Stuff";
    newItem.id = firstItemId;
    list.appendChild(newItem);
    findThermometer();
    // add more function calls

};

function findThermometer() {

}

function addFridgeList() {
    const myArray = condos[623].e.kitchen.refrigerator;
    for (let i = 0; i < myArray.length; i++) {

    }
    
}

function addFridgeList2() {

}

function countFridgeStuf() {

}


// whatsInBlakesFridge();
addFridgeList();