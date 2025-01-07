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

// check if the number is prime or not
// const checkPrime = (n: number): boolean => {
//     if (n == 1 || n == 2 || n == 3) return true;         //always assumes that the number is prime
//     for (let i: number = 2; i <= Math.sqrt(n); i++) {
//         if (n % i != 0) {
//             return true;                                 //always assumes that the number is prime first
//         }
//     }
//     return false;
// }
// const x = checkPrime(6);
// x ? process.stdout.write("Prime Number") : process.stdout.write("Not a prime number");

// Binary Search
// const binarySearch = (array: number[], key: number): number => {
//     let start: number = 0; let end: number = array.length; let mid: number = 0
//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);                                             // rememeber to use the Math.floor method in this
//         if (key == array[mid]) return mid;
//         else if (key > array[mid]) start = mid + 1;
//         else end = mid - 1;
//     }
//     return -1;
// }
// process.stdout.write(binarySearch([2, 4, 5, 6, 8, 10, 12, 15, 18, 21, 22], 354).toString());

// print the reverse of an array
// const printReverse = (array: number[]): void => {
//     for (let i: number = 0; i < Math.floor(array.length / 2); i++) {
//         let temp = array[i];
//         array[i] = array[array.length - i - 1];
//         array[array.length - i - 1] = temp;
//     }
// }
// const printArray = (array: number[]): void => {
//     for (let i: number = 0; i < array.length; i++) {
//         process.stdout.write(array[i] + " ");
//     }
// }
const sortedArr: number[] = [2, 4, 5, 6, 8, 10, 12, 15, 18, 21, 22];
const unsortedArray: number[] = [23, 434, 2342, 5, 24, 33, 5, 6456, 34, 64, 5, 23, 23, 545, 87, 976, 678, 6756];
// printReverse(unsortedArray);
// printArray(unsortedArray);

// Kadan's algorithm to find the max sum
// const KadansAlgorithm = (array: number[]): void => {
//     let currentSum: number = 0; let maxSum: number = 0;
//     for (let i: number = 0; i < array.length; i++) {
//         currentSum += array[i];
//         if (currentSum < 0) currentSum = 0;
//         maxSum = Math.max(maxSum, currentSum);
//     }
//     process.stdout.write("Max sum of an array :- " + maxSum);
// }
// KadansAlgorithm(unsortedArray);          // need to remember the Theory again

// Trapping of rainwater