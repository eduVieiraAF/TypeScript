"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Mediuam"] = 2] = "Mediuam";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
console.log(Size);
let tShirt = ["Yellow", Size.Large];
tShirt.forEach(n => console.log(n));
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
//# sourceMappingURL=index.js.map