//* TYPESCRIPT
/*
    → is not a language.
    → is an extension to JavaScript both run simultaneously
    → deals with data types and addresses other shortcomings of JavaScript
    → shows errors not in runtime, so you can see them earlier
    → needs to be transpiled into a JavaScript file
    → helps you write better code
    → adds static typing for type checking
    → refactoring
    → Shorthand notations
    → contains everything JavaScript has

let age: number = 20;

if (age >= 50) console.log("Old fart");
else if(age < 50 && age >= 18) console.log("A grownup");
else if (age < 18 && age >= 12) console.log("Ah, the jerk years");
else console.log("Keep your nose clean");

*/

//* Built-in Types

//* JavaScript      ||  TypeScript (adds more)
/*                  ||  
    → number        ||  → any
    → string        ||  → unkonw
    → bolean        ||  → neverr
    → null          ||  → enum
    → undefined     ||  → tuple
    → object        ||

let id: number = 164_870;
let course: string = 'TypeScript';
let isPublished = true; // doesnt necessarily need annotation
let grade; // type any

//* type any will let you reassign using different types
grade = 10;
grade = "B+"; 

function render(document: any) { // needs annotation when it's a parameter
    console.log(document);
}

//* in tsconfig.json you can enable (// "noImplicitAny": true,) and set it to false, but it's not recommended

//* Arrays
let numbers: number[] = [1, 2, 3, 'four', '5'];  to avoid iteration problems, it's recommended to annotate arrays
                                                    especially if you're declaring an empty array

let numbers: number[] = [1, 2, 3, ];

numbers.forEach(n => console.log(n));

//* Tuples
let user: [number, string] = [40, "Edu"]; // avoid using more than 2 elements
console.log(user);
console.log(user[1]);

//* Enums
enum Size {
    Small = 1, // Other will be automatically add
    Mediuam,
    Large
}

console.log(Size) // {1: 'Small', 2: 'Mediuam', 3: 'Large', Small: 1, Mediuam: 2, Large: 3}
let tShirt = ["Yellow", Size.Large]

tShirt.forEach(n => console.log(n))

const enum NetworkResponse { // optmized transpiling
    Success = "Connected",
    Error = "Unable to connect",
    Blocked = "Permission denied",
    Unkown = "UNKNOWN ERROR"
}

let httpResponse = 4

switch (httpResponse) {
    case 4:
        console.log(NetworkResponse.Success);
        break;
    case 3:
        console.log(NetworkResponse.Blocked);
        break;
    case 2:
        console.log(NetworkResponse.Error);
        break;
    case 1:
        console.log(NetworkResponse.Unkown);
}

//* Functions
function calculateTax(income: number): number { // return type
    if (income > 50_000) return income - (income * 0.8);
    
    return income - (income * 0.7);
}


let pay = calculateTax(82_000)
console.log(pay)
 

//* Objects 

let employeeSimple : {
    readonly id: number,
    name: string,
    age?: number,
    retire: (date: Date) => void
} = { 
    id:1, 
    name:"Edu",
    retire: (date: Date) => {
        console.log(date)
    }
};

type Empolyee = {
    readonly id: number,
    name: string,
    age?: number,
    retire: (date: Date) => void
}

let employee: Empolyee = {
    id: 1,
    name: "Edu",
    retire: (date: Date) => console.log(date)
}

console.log(employee); 

//* Union types gives a variable or function param different types
function kgToLbs(weight: number | string): number {
    // narrowing
    if (typeof weight === 'number') return weight * 2.2;
    else return parseInt(weight) * 2.2;
}

console.log(kgToLbs(25));
console.log(kgToLbs('25kg'));

//* Intersection Types
let weight: number & string; // both types but it's practically not a good idea

// Unite them as the following example
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let button: UIWidget = {
    drag: () => {},
    resize: () => {},
}

//* Literal Types (exact, specific)
let quantity1: 50 | 100; // can be set to 50 or 100

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metrics = 'cm' | 'inch' | 'yrd';

//* Nullable Types
function greet(name:string | null | undefined) {
    if (name) console.log(name.toUpperCase());
    else console.log("Empty or null.");
}

greet(null);
*/

//* Optional chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null: { birthday: new Date() };
}

let customer = getCustomer(2);
console.log(customer?.birthday?.getFullYear())

//* Optional element access operator → useful with array
// customers?.[0];


