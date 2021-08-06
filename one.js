import condos from "./blake_home.js";
const firstItemId = "firstItem";
function whatsInBlakesFridge() {

    console.log("whatsInBlakesFridge??");

    console.log(condos);

    const list = document.getElementById("fridgeList");
    const newItem = document.createElement("li");
    newItem.innerHTML = condos[623].e.tenant + "'s Stuff";
    newItem.id = firstItemId;
    list.appendChild(newItem);

    //now you do
    // add more functions

    // countFridgeStuf();
    findThermometer();

};

function findThermometer() {

}

function addFridgeList() {

}

function addFridgeList2() {

}

function countFridgeStuf() {

}


whatsInBlakesFridge();