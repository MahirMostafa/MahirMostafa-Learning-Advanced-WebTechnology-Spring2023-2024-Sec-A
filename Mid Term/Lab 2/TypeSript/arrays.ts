let numbers: number[] = [1,2,3,4,5];
let firstElement : number = numbers[0];

let arrayLength: number = numbers.length;

numbers.push(6);
for (let num of numbers) {
    console.log(num);
}