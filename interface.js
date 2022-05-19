"use strict";
exports.__esModule = true;
function fullName(person) {
    return "".concat(person.fName, " ").concat(person.lName);
}
var p = {
    fName: "abc",
    lName: "xyz"
};
console.log(fullName(p));
