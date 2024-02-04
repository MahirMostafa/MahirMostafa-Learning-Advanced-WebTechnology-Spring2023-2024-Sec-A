let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";

let arr1 = [1 ,2,3];
let arr2 = [...arr1];

let aar3 = [4, 5, 6];
let combinedArray = [...arr1,...arr2];

let newArr = [0, ...arr1, 4];

function sum(a,b,c){
    return a+b+c;
}
let numbers = [1 ,2 ,3]
let result = sum(...numbers)

let obj1 = {name:'John', age: 25};
let obj2 = {...obj1};

let obj3 = { city: 'New York', ...obj1};

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

let result1 = sum(1,2,3,4,5);
console.log(result1);

result2 = sum(10,20);
console.log(result2)