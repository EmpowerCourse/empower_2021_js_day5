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
    const list = document.getElementById("fridgeList");
    const newItem = document.createElement("li");
    newItem.innerHTML = condos[623].e.kitchen.drawers.rightSink[0];
    newItem.id = firstItemId;
    list.appendChild(newItem);
}

function addFridgeList() {
    const list = document.getElementById("fridgeList");
    
    for (let i = 0; i < condos[623].e.kitchen.refrigerator.length; i++) {
        const newItem = document.createElement("li");
        newItem.innerHTML = condos[623].e.kitchen.refrigerator[i];
        list.appendChild(newItem);
    }
}

function addFridgeList2() {

}

function countFridgeStuf() {

}


whatsInBlakesFridge();
findThermometer();
addFridgeList();