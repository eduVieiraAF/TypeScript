"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(25));
console.log(kgToLbs('25kg'));
//# sourceMappingURL=index.js.map