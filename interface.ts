export {}

interface Person {
    fName : string;
    lName : string;
}
function fullName(person : Person): string{
    return `${person.fName} ${person.lName}`
}

let p = {
    fName : "abc",
    lName: "xyz"
}

console.log(fullName(p))