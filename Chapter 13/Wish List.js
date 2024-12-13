// Create an event listener for the print button, with a handler function called printView

// var printButton = 
var printButton = document.getElementById("printable");

// Create an event listener for the add button, with a handler function called addTheThing
printButton.addEventListener("click", printView);

// var addButton =
var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

// create a blank array named myList
var myList = [];

/* create a variable, myListArea, which references the element with the id of 'wishList' */   
// var myListArea = 
var myListArea = document.getElementById("wishList");

/* function addTheThing gets the value of the text field and then passes it to a function called addToTheList. It then runs a function called resetInput
function addTheThing() {} */
function addTheThing() {
    var theThing = document.getElementById("iWant");
    addToTheList(theThing.value);
    resetInput(theThing);   
}
/* function addToTheList,which takes one parameter, called thingToAdd, pushes it into the myList array, and then adds it to myListArea 
function addToTheList(thingToAdd) {} */
function addToTheList(thingToAdd){
   /*  myList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];
    myListArea.appendChild(newListItem); // appendChild is just adding to the ul element  */

    if (thingToAdd.trim() !== "") { // Check if the input is not empty
        myList.push(thingToAdd); // Use thingToAdd directly
        let newListItem = document.createElement("li");
        newListItem.innerHTML = thingToAdd; // Use thingToAdd directly
        myListArea.appendChild(newListItem); // Append to the ul element 
    } else {
        alert("Please enter a valid item."); // Alert if input is empty
    }
}

function resetInput(inputToReset){
    inputToReset.value = "";
}

function printView(){
    let listPage = document.getElementById("listPage");
    let fromArea = document.getElementById("fromArea");
    
    fromArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();

    for (var i = 0; i < myList.length; i++){
        myListArea.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
}


