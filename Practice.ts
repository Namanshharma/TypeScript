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
let n = 5;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
            process.stdout.write("*");
        }
        else { process.stdout.write(" ") };
    }
    console.log();
}