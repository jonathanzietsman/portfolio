// 2: Page 131
// 1: Page 134
var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "lightgreen",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500
}
// 3: Page 131
/* alert("The type of dreamCar is: " + typeof dreamCar); */

// 2: Page 134
document.getElementById("pricetag").innerHTML = dreamCar.price;
// 3: Page 135
document.getElementById("modelyear").innerHTML = dreamCar.year;
// 4: Page 135
document.getElementById("body").style.backgroundColor = dreamCar.color;
// 5: Page 135
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;