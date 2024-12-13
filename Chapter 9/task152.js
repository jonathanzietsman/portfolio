document.getElementById("submit").addEventListener("click", calculateIt);

function calculateIt() {
    // Create variables to store operands, operator, and return value
    var myOperator;
    var returnValue;
    
    // Get the operands and their types
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    var select1 = document.getElementById("operand1-type");
    var select2 = document.getElementById("operand2-type");
    var operand1type = select1.value;
    var operand2type = select2.value;
    
    // Convert operands to their respective types
    switch (operand1type) {
        case "string":
            operand1 = String(operand1);
            break;
        case "number":
            operand1 = Number(operand1);
            break;
    }
    
    switch (operand2type) {
        case "string":
            operand2 = String(operand2);
            break;
        case "number":
            operand2 = Number(operand2);
            break;
    }
    
    // Get the operator
    var radios = document.getElementsByName('operator');
    
    // Loop through each possible operator value and find the checked one
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            myOperator = radios[i].value;
            
            // Perform the operation based on the operator
            switch (myOperator) {
                case "+":
                    returnValue = operand1 + operand2;
                    break;
                case "-":
                    returnValue = operand1 - operand2;
                    break;
                case "*":
                    returnValue = operand1 * operand2;
                    break;
                case "/":
                    returnValue = operand1 / operand2;
                    break;
                case "%":
                    returnValue = operand1 % operand2;
                    break;
                case "^":
                    returnValue = Math.pow(operand1, operand2);
                    break;
                case "sqrt":
                    returnValue = Math.sqrt(operand1);
                    break;
                case "log":
                    returnValue = Math.log(operand1);
                    break;
                case "sin":
                    returnValue = Math.sin(operand1);
                    break;
                case "cos":
                    returnValue = Math.cos(operand1);
                    break;
                case "tan":
                    returnValue = Math.tan(operand1);
                    break;
                case "concat":
                    returnValue = operand1 + operand2;
                    myOperator = "+";
                    break;
                case "==":
                    returnValue = operand1 == operand2;
                    break;
                case "===":
                    returnValue = operand1 === operand2;
                    break;
                case "!=":
                    returnValue = operand1 != operand2;
                    break;
                case "!==":
                    returnValue = operand1 !== operand2;
                    break;
                case ">":
                    returnValue = operand1 > operand2;
                    break;
                case ">=":
                    returnValue = operand1 >= operand2;
                    break;
                case "<":
                    returnValue = operand1 < operand2;
                    break;
                case "<=":
                    returnValue = operand1 <= operand2;
                    break;
            }
            
            break;
        }
    }
    
    // Display the operation and return value
    if (typeof(operand1) === "string") {
        operand1 = '"' + operand1 + '"';
    }
    if (typeof(operand2) === "string") {
        operand2 = '"' + operand2 + '"';
    }
    document.getElementById("final-operation").innerHTML = operand1 + myOperator + operand2;
    document.getElementById("result").innerHTML = returnValue;
}