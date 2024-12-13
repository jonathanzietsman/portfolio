// Listen for Button Clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder(){
    // Get form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity =  document.getElementById("deliveryCity").value;
    // 4: Page 247
    var birthday = document.getElementById("birthday").value;

    // Get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);
    // Get the delivery price
    // 6: Page 248
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);
    // Create the output
    var theOutput = "<p>Thank you for your order.</p>"

    // Output the delivery pirce if there is one
    // 2: Page 245
    if (deliveryPrice === 0){
        theOutput += "<p>You get free delivery!</p>";
    }
    else{
        theOutput += "<p>Your delivery cost is: R" + deliveryPrice;
    }
    theOutput += "<p>Your total cost is: R" + (orderPrice + deliveryPrice);
    // display the output 
    
    document.getElementById("displayTotal").innerHTML = theOutput;

}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza){
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;
    // calculate extra charge if there is one
    // 5: Page 243
    if (typePizza === "supreme"){
        extraCharge = Number(numPizzas) * 2;
    }
    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
// 4: Page 247
function calculateDelivery(orderPrice,deliveryCity,birthday){
    var deliveryPrice = 0;

    // calculate delivery price if there is one
    // 5: Page 245
    // 5: Page 248
    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || (birthday === "yes")){
        deliveryPrice = 0;
    }
    else{
        deliveryPrice = 5;
    }
    return deliveryPrice; 
}