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
    const list = document.getElementById("fridgeList");
    const newItem = document.createElement("li");
    newItem.innerHTML = condos[623].e.kitchen.drawers.rightSink[0];
    newItem.id = firstItemId;
    list.appendChild(newItem);
}

function addFridgeList() {
<<<<<<< HEAD
    const list = document.getElementById("fridgeList");
    
    for (let i = 0; i < condos[623].e.kitchen.refrigerator.length; i++) {
        const newItem = document.createElement("li");
        newItem.innerHTML = condos[623].e.kitchen.refrigerator[i];
        list.appendChild(newItem);
    }
=======
    const myArray = condos[623].e.kitchen.refrigerator;
    for (let i = 0; i < myArray.length; i++) {

    }
    
>>>>>>> a66a2eb588aa1335199ebcb94226384e13531b78
}

function addFridgeList2() {

}

function countFridgeStuf() {

}


<<<<<<< HEAD
whatsInBlakesFridge();
findThermometer();
=======
// whatsInBlakesFridge();
>>>>>>> a66a2eb588aa1335199ebcb94226384e13531b78
addFridgeList();