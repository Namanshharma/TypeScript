// generics
// Generics are the way to create a components ( functions , classes or interfaces ) that work with different types without Losing type safety

// function genericFunction<T>(args: T): T {                                                    // generic function
//     return args;
// }

// const genericFunction1 = <T>(args: T) => {                                                      // generic arrow function
//     return args;
// }

// console.log(genericFunction1<string>("Hey"));
// console.log(genericFunction1(25));

// interface person<T, U> {                                                                        // generic interface
//     Name: T;
//     FatherName: U
// }

// const person: person<string, number> = {
//     Name: "Naman",
//     FatherName: 55
// }

// const getLength = <T extends { length: number }>(args: T): number => {   // by using this I am using the generic constraints
//     return args.length;                                                  // it means what ever the argument we will pass that must have the length function contain in it
// }

// console.log(getLength("Papa"));
// console.log(getLength([1, 2, 3, 4, 5, 6]));


// class Animal<T> {                                                       // generic classes
//     contents: T;

//     constructor(value: T) {
//         this.contents = value;
//     }
//     getContents = (): T => this.contents;
// }

// const firstAnimal = new Animal<string>("This is my first animal");
// console.log(firstAnimal.getContents());



// ---------------------------------------------------------------------- Literals / Enums -----------------------------------------------------------------------

// type Coin = "2's" | "10's";
// const coin: Coin = "2's";

// type OrderStatus = "Delivered" | "Pending" | "Returned" | "Cancelled";
// const yourOrderStatus: OrderStatus = "Returned";

// const checkYourOrderStatus = (action: OrderStatus): void => {
//     switch (action) {
//         case "Delivered":
//             console.log("Your order is Delivered");
//             break;
//         case "Cancelled":
//             console.log("Your order is Cancelled");
//             break;
//         case "Pending":
//             console.log("Your order is Pending");
//             break;
//         case "Returned":
//             console.log("Your order is Returned");
//             break;
//         default:
//             break;
//     }
// }


// ----------------------------------------------------------------------- Type guards -----------------------------------------------------------------------------

// we have the type guards to provide more strictness to the code by using some properties like
//
// ==> typeof ( to check the specific type of the varible, suppose if the type of the varible is string only then we are going to do something )
// ==> instanceof ( similar to typeof, this instanceof property is used with the objects and classes )
// ==> Apart from this, we also have the option of Custom type guard but that I will learn in future

// class dog { bow = () => console.log("bow bow"); }
// class cat { meow = () => console.log("meow meow") }
// const produceSound = (args: dog | cat) => { args instanceof dog ? console.log(args.bow) : args.meow }



// ------------------------------------------------------------------------- Utilities --------------------------------------------------------------------------------
// in the utilities we have some extra properties which we can assign to some interfaces , classes , variables according to our convenience

// ==> PARTIAL < Class or interface Name > :- by using this we are telling to the object that all of the properties are OPTIONAL
// ==> REQUIRED < Class or interface Name > :- by using this we are telling to the object that all of the properties are MENDATORY

// interface User { Name: string; Age: Number; Occupation: string }
// const obj1: Partial<User> = { Name: "Naman Sharma" };
// const obj2: Required<User> = { Name: "Naman Sharma", Age: 27, Occupation: "SDE" };

// ==> READONLY :- We can provide the readonly property to any variable and then we only read the value of that variable as we are not able to assign any value to
//                 that except constructor of class or after the first initialization



// ========================================================== Practice Sprint 2 =======================================================================
// print the reverse of an given number
// const printReverse = (n: number): void => {
//     process.stdout.write(n.toString()+"\n");
//     while (n > 0) {
//         const lastDigit = (n % 10);
//         process.stdout.write(lastDigit.toString());
//         n = Math.floor(n / 10);                                 // remember this line like we need to Divide first and then we will use floor method
//     }
// }
// printReverse(234543);

// print the reverse of an given number but before print store it in some variable
// const printReverseByStoring = (n: number): void => {
//     process.stdout.write(n.toString()+"\n");
//     let response: number = 0;
//     while (n > 0) {
//         const lastDigit: number = n % 10;
//         response = lastDigit + (response * 10);                    // always remember this formula
//         n = Math.floor(n / 10);
//     }
//     process.stdout.write(response.toString());
// }
// printReverseByStoring(28734682937);