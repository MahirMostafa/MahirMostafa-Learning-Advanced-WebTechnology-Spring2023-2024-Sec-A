let age = 16;
let status ;

switch (true)
{
    case age >= 18 : status = "Adult";
    break ;
    case age >= 13 : status = "Teenager";
    break ;
    default : status = "Minor";
}

console.log(status);