//------------------------------------------------------------------------------------------------ Loops --------------------------------------------------------------------------------------------------------------

// Print number from 1- 10
// for (let i = 0; i <= 10; i++) { console.log(i); }

// Print the sum of first N natural numbers
// let x = 0;
// for (let i = 0; i <= 10; i++) { console.log(x += i) }

// print square pattern with stars
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         process.stdout.write("*"); // Print without newline
//     }
//     process.stdout.write("\n");
// }

// print the reverse of a given number
// let x = 1023356353;
// while (x > 0) {
//     let z = x % 10;
//     process.stdout.write(z.toString());
//     x = Math.floor(x / 10);
// }

// print the reverse of originai number
// let x = 134452782;
// let reverse = 0;
// while (x > 0) {
//     let lastDigit = x % 10;
//     reverse = (reverse * 10) + lastDigit;                // this is the main logic
//     x = Math.floor(x / 10);
// }
// console.log(reverse);

// check if number is prime or not
// const x: number = 2;
// const checkPrime = (x: number): string => {
//     for (let i = 2; i <= Math.sqrt(x); i++) {
//         if (x % i == 0) {
//             return "Not a Prime";
//         }
//     };
//     return "Prime";
// }
// x == 2 ? console.log("Prime number") : console.log(checkPrime(x));

// Pattern :- right angle triangle
// const n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log("");
// }

// Pattern :- Inverted Right angle triangle
// const n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         process.stdout.write("*");
//     }
//     console.log("");
// }

// Pattern :- right angle tiangle with numbers
// const n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write((j + 1).toString());
//     }
//     console.log();
// }

// pattern :- hollow square
// let n = 5;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
//             process.stdout.write("*");
//         }
//         else { process.stdout.write(" ") };
//     }
//     console.log();
// }

// pattern :- Inverted and rotated half pyramid
// const n = 5;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         process.stdout.write(" ");
//     }
//     for (let k = 0; k <= i; k++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }

// pattern :- inverted half pyramid with numbers
// const n = 5;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= n - i - 1; j++) {
//         process.stdout.write((j + 1).toString());
//     }
//     console.log();
// }

// pattern floyd's triangle
// const n = 5; let x = 1;
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         process.stdout.write(x.toString() + " ");
//         x++;
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//         process.stdout.write(" ");
//     }
//     console.log();
// }

// pattern 0-1 triangle
// const n = 5;
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= i; j++) {
//         (i + j) % 2 == 0 ? process.stdout.write("1") : process.stdout.write("0");
//     }
//     console.log();
// }

// pattern Butterfly
// const n = 5;
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= i; j++) process.stdout.write("*");
//     for (let j = 0; j <= 2 * (n - i); j++) process.stdout.write(" ");
//     for (let j = 0; j <= i; j++) process.stdout.write("*");
//     console.log();
// }
// for (let i = n; i >= 0; i--) {
//     for (let j = 0; j <= i; j++) process.stdout.write("*");
//     for (let j = 0; j <= 2 * (n - i); j++) process.stdout.write(" ");
//     for (let j = 0; j <= i; j++) process.stdout.write("*");
//     console.log();
// }

// pattern Solid Rhombus
// const n = 5;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) process.stdout.write(" ");
//     for (let j = 0; j <= n; j++) process.stdout.write("*");
//     console.log();
// }

// pattern hollow rhombus
// const n = 5;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) process.stdout.write(" ");
//     for (let j = 0; j < n; j++) {
//         if (j == 0 || j == n - 1 || i == n - 1 || i == 0) process.stdout.write("*");
//         else process.stdout.write(" ");
//     }
//     console.log();
// }

// Diamond patter
// const n = 5;
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n - i - 1; j++) process.stdout.write(" ");
//     for (let j = 0; j < (2 * i) + 1; j++) process.stdout.write("*");
//     console.log();
// }
// for (let i = n; i >= 0; i--) {
//     for (let j = 0; j <= n - i - 1; j++) process.stdout.write(" ");
//     for (let j = 0; j < (2 * i) + 1; j++) process.stdout.write("*");
//     console.log();
// }



// ---------------------------------------------------------------------- Arrays -----------------------------------------------------------------------------------------------------

// const array: number[] = [1, 2, 3, 4, 5, 6, 7];

// Linear Search
const arr: number[] = [23, 43, 5, 6, 3, 333, 23, 53, 567, 9764, 7454, 32, 324];
const key: number = 1;

// const LinearSearch = (arr: number[], key: number) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (key == arr[i]) return true;
//     }
//     return false;
// }
// console.log(LinearSearch(arr, key) == true ? "Key is present in the Array" : "Didn't found in the array");

// Find the larget in the given array;
const findLargest = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {

    }
    return -1;
}