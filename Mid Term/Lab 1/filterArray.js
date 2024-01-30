const numbers = [1,2,3,4,5,6];
const evenNumbers = numbers.filter(function (num)
{
    return num % 2 === 0;
});
console.log(evenNumbers);