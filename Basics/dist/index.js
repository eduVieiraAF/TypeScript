"use strict";
function calculateTax(income) {
    if (income > 50000)
        return income - (income * 0.8);
    return income - (income * 0.7);
}
let pay = calculateTax(82000);
console.log(pay);
//# sourceMappingURL=index.js.map