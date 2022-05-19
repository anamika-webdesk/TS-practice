"use strict";
exports.__esModule = true;
var flagBool;
var num;
var name;
var n;
var u;
name = "Anamika";
console.log("I am ".concat(name));
var list = Array();
num = 5;
for (var i = 1; i <= num; i++)
    list.push(i);
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    num = list_1[_i];
    console.log("\n", num);
}
var multiple = ["abc", 11];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var c = Color.Blue;
console.log("\n", c);
var anyDataType = 1;
anyDataType = "abc";
anyDataType = true;
console.log("\n", anyDataType);
var multiType;
multiType = 20;
console.log("\n", multiType);
multiType = "abc";
console.log("\n", multiType);
