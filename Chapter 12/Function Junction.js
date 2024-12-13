//todo: Create three global variables:
// trainSpeed (initial value = 250)
var trainSpeed = 250;
// trainPosition (initial value = 0)
var trainPosition = 0;
// animation (no initial value)
var animation;
 
// todo: Listen for click events on the train element and call a function named speedUp when they happen 
var train = document.getElementById("train");

// todo: Listen for click events on the stop button element and call a function called stopTrain when they happen. 
train.addEventListener("click", speedUp); /* changed from stopTrain */

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

// function speedUp
function speedUp(){
    // todo: Check whether the train is already going as fast as it can. If not, increase the speed.
    if (trainSpeed > 10){
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    // If the train is already moving, stop it and then restart with the new speed by calling a function called frame.
    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    function frame(){
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition){
    // todo: Check the train's current position and crash it if it's at the end of the line.
    /* Lengthening the tracks!: Page 205 */
    if (currentPosition === 580){ /* Increased from 260 */
        alert("Crashed!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain(){
    // todo: Test whether the train is already crashed. If not, stop the train.
    /* Lengthening the tracks!: Page 205 */
    if (trainPosition < 580){ /* Increased from 260 */
        clearInterval(animation);
    }
}

