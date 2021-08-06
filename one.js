import condos from "./blake_home.js";
const firstItemId = "firstItem";
function whatsInBlakesFridge() {

    const list = document.getElementById("fridgeList");
    const newItem = document.createElement("li");
    newItem.innerHTML = condos[623].e.tenant + "'s Stuff";
    newItem.id = firstItemId;
    list.appendChild(newItem);
<<<<<<< HEAD


=======
    findThermometer();
>>>>>>> 0974f58cb8029728a24696ca4992cc8845d7d9a7
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
    for (let i = 0; i < condos[623].e.kitchen.refrigerator.length; i++) {

    }
=======
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
>>>>>>> 0974f58cb8029728a24696ca4992cc8845d7d9a7
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

<<<<<<< HEAD
addFridgeList2()
whatsInBlakesFridge();
=======

<<<<<<< HEAD
whatsInBlakesFridge();
findThermometer();
=======
// whatsInBlakesFridge();
>>>>>>> a66a2eb588aa1335199ebcb94226384e13531b78
addFridgeList();
>>>>>>> 0974f58cb8029728a24696ca4992cc8845d7d9a7
