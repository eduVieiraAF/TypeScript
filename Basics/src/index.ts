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
    console.log(document)
}

//* in tsconfig.json you can enable (// "noImplicitAny": true,) and set it to false, but it's not recommended

*/











