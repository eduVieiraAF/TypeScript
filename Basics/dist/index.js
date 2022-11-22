"use strict";
var _a;
let age = 20;
if (age >= 50)
    console.log("Old fart");
else if (age < 50 && age >= 18)
    console.log("A grownup");
else if (age < 18 && age >= 12)
    console.log("Ah, the jerk years");
else
    console.log("Keep your nose clean");
let id = 164870;
let course = "TypeScript";
let isPublished = true;
let grade;
grade = 10;
grade = "B+";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach((n) => console.log(n));
let user = [40, "Edu"];
console.log(user);
console.log(user[1]);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Mediuam"] = 2] = "Mediuam";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
console.log(Size);
let tShirt = ["Yellow", Size.Large];
tShirt.forEach((n) => console.log(n));
let httpResponse = 4;
switch (httpResponse) {
    case 4:
        console.log("Connected");
        break;
    case 3:
        console.log("Permission denied");
        break;
    case 2:
        console.log("Unable to connect");
        break;
    case 1:
        console.log("UNKNOWN ERROR");
}
function calculateTax(income) {
    if (income > 50000)
        return income - income * 0.8;
    return income - income * 0.7;
}
let pay = calculateTax(82000);
console.log(pay);
let employeeSimple = {
    id: 1,
    name: "Edu",
    retire: (date) => {
        console.log(date);
    },
};
let employee = {
    id: 1,
    name: "Edu",
    retire: (date) => console.log(date),
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(25));
console.log(kgToLbs("25kg"));
let weight;
let button = {
    drag: () => { },
    resize: () => { },
};
let quantity1;
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Empty or null.");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(2);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
function createPairs(v1, v2) {
    return [v1, v2];
}
console.log(createPairs("Hello", 500));
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
const value1 = new NamedValue('myNumber');
value1.setValue(613);
const value2 = new NamedValue('userName');
value2.setValue("ZeroCool");
console.log(`${value1.toString()} → ${value2.toString()}`);
//# sourceMappingURL=index.js.map