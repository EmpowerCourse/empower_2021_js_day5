import condos from "./blake_home.js";

const firstItemId = "firstItem";
function whatsInBlakesFridge() {

    console.log("whatsInBlakesFridge??");

    // console.log(condos);

    const list = document.getElementById("fridgeList");
    const newItem = document.createElement("li");
    newItem.innerHTML = condos[623].e.tenant + "'s Stuff";
    // newItem.id = firstItemId;
    list.appendChild(newItem);


    // add more function calls
    findThermometer();
    addFridgeList();

};

function findThermometer() {
    // console.log(condos[623].e.kitchen.drawers.rightSink[0] + " is found");
    console.log(`${condos[623].e.kitchen.drawers.rightSink[0]} is found`);
}

function addFridgeList() {
    const list = document.getElementById("fridgeList");

    for (let i = 0; i < condos[623].e.kitchen.refrigerator.length; i++) {
        const newItem = document.createElement("li");
        newItem.innerHTML = condos[623].e.kitchen.refrigerator[i];
        // newItem.id = firstItemId;
        list.appendChild(newItem);
    }
}

function addFridgeList2() {

}

function countFridgeStuff() {
    console.log(`There are ${condos[623].e.kitchen.refrigerator.length + condos[623].e.kitchen.freezer.length} items in the refrigerator`)
}

whatsInBlakesFridge();
