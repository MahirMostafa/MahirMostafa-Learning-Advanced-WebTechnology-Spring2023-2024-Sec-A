function operationOnNumber(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x,y){
    return x * y;
}

let resultAddition = operationOnNumber(5 ,3 ,add);
let resultmultiplication = operationOnNumber(5 ,3 ,multiply);