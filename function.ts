export {}

function add (num1 : number, num2: number): number{
    return num1+num2
}

console.log(add(10,5))


function add1 (num1 : number, num2: number = 5): number{
        return num1+num2
}

console.log("\n Default parameter", add1(10,5))

function add2 (num1 : number, num2?: number): number{
    if(num2)
        return num1+num2
    else
        return num1
}

console.log("\n Optional parameter", add2(5))