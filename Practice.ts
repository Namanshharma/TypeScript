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
const array: number[] = [23, 43, 5, 6, 3, 333, 23, 53, 567, 9764, 7454, 32, 324];
const key: number = 333;

// const LinearSearch = (arr: number[], key: number) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (key == arr[i]) return true;
//     }
//     return false;
// }
// console.log(LinearSearch(arr, key) == true ? "Key is present in the Array" : "Didn't found in the array");

// Find the larget in the given array;
// const findLargest = (arr: number[]): number => {
//     let largest = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) largest = arr[i];
//     }
//     return largest;
// }
// console.log("Largest in array is :- " + findLargest(arr))

// Find the smallest in the given array
// const findSmallest = (arr: number[]): number => {
//     let smallest = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < smallest) smallest = arr[i];
//     }
//     return smallest;
// }
// console.log("Smallest in array is :- " + findSmallest(arr));

// Binary Search ---- only applicable if the given array is SORTED
const sortedArray: number[] = [2, 4, 6, 8, 10];
const keyForSortedArray: number = 20;

// const binarySearch = (sortedArray: number[], keyForSortedArray: number): number => {
//     let start = 0; let end = sortedArray.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);              // here for the optimization we can use another formula and that is
//         if (sortedArray[mid] == keyForSortedArray) return mid;
//         else if (sortedArray[mid] < keyForSortedArray) start = mid + 1;
//         else end = mid - 1;
//     }
//     return -1;
// }
// const response = binarySearch(sortedArray, keyForSortedArray);
// console.log(response > 0 ? "Key is at :- " + response : "Key doesn't present in the array :- " + response);

// Reverse the array
// const reverseArray = (array: number[]): void => {
//     let start: number = 0; let end: number = array.length - 1;
//     while (start < end) {
//         const temp: number = array[start];
//         array[start] = array[end];
//         array[end] = temp;
//         start++; end--;
//     }
// }
const printTheArray = (array: number[]): void => {
    for (let i: number = 0; i < array.length; i++) {
        process.stdout.write(array[i].toString() + " ");
    }
    console.log();
};
// reverseArray(array);
// printTheArray(array);

// pairs in an array            ::--            Total number of pairs are -- ( n ( n-1 ) ) / 2
// const printPairs = (arr: number[]): void => {
//     for (let i: number = 0; i < arr.length; i++) {
//         process.stdout.write("I :- " + i + "    ");
//         for (let j: number = i + 1; j < arr.length; j++) {
//             process.stdout.write(`(${arr[i]},${arr[j]})\t`);
//         }
//         console.log();
//     }
// }
// printTheArray(array);
// printPairs(array);

// print the subarray of an array                       :::--- There is no need to return the array from function becoz it is
// const printSubArray = (array: number[]): void => {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             for (let k = i; k <= j; k++) {
//                 process.stdout.write(`${array[k]} `)
//             }
//             process.stdout.write("\t");
//         }
//         console.log();
//     }
// }
// printSubArray(sortedArray);

// print the max sum of sub array                               <<---- it's time complexity is O(n^3) which is the worst time complexity
// const printMaxOfSubArray = (array: number[]): number => {
//     let maxSubArraySum: number = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             let inidividualSubArraySum: number = 0;
//             for (let k = i; k <= j; k++) {
//                 process.stdout.write(array[k].toString() + " ");
//                 inidividualSubArraySum += array[k];
//             }
//             process.stdout.write("Total Sum of this Sub Array is :- " + inidividualSubArraySum.toString());
//             console.log();
//             maxSubArraySum = Math.max(inidividualSubArraySum, maxSubArraySum);
//         }
//     }
//     return maxSubArraySum;
// }
// console.log("Here is the max Sum of Sub array :- " + printMaxOfSubArray(array));

// print the sub array sum by using KADAN'S ALGORITHM                               <<---- this is the most optimized approach to find max sub array sum TC :- O(n)
// const kadansMaxSubArraySum = (array: number[]): number => {
//     let currentSum: number = 0; let maxSum: number = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < array.length; i++) {
//         currentSum += array[i];
//         if (currentSum < 0) currentSum = 0;
//         maxSum = Math.max(currentSum, maxSum);
//     }
//     return maxSum;
// }
// const arrr: number[] = [-2, -3, 4, -1, -2, 1, 5, -3];
// console.log("Here is max sum of sub array by using Kadan's algo :- " + kadansMaxSubArraySum(arrr));

// Trapping of rainwater                        <<---- here we got to know about the auxiliary array
// Trapped Rainwater = ( WaterHeight - BarHeight ) * WidthOfBar    <<---- from these 3 things BarHeight will comes from Array , Bar width will comes from question.
// Main question is about WaterHeight    <<---- And to find this, we need to find the max height from the left bars by standing on the currrent bar and similar for right bars
// Once we get the max of left and right boundary then we will get the minimum from both of those 2 values :- ( ( Min ( Max ( left boundry ) , Max ( right boundry ) ) ) - bar height ) * bar width
// Now to calculate the Max of left boundry and max of right boundry ::---- we need to use the AUXILARY ARRAY / HELPER ARRAY
// In the aux arrays we will create one array for left max boundries and another for right max boundries
// For the left max boundry we will check the height of current bar and then compare it with last bar max left boundry and will do similar thing for right aux array

// const calculateTrappingRainWater = (trappedWaterArray: number[]): number => {
//     // calculate left max boundry
//     const leftBoundryArray: number[] = new Array(trappedWaterArray.length);
//     leftBoundryArray[0] = trappedWaterArray[0];
//     for (let i = 1; i < trappedWaterArray.length; i++) {
//         leftBoundryArray[i] = Math.max(trappedWaterArray[i], leftBoundryArray[i - 1]);// through this formula we are comparing current height of bar from Main array with last index height from left auxiliary array
//     }

//     // calculate right max boundry
//     const rightBondryArray: number[] = new Array(trappedWaterArray.length);
//     rightBondryArray[rightBondryArray.length - 1] = trappedWaterArray[trappedWaterArray.length - 1];
//     for (let i = trappedWaterArray.length - 2; i >= 0; i--) {           // here always remember that for right boundry we need to start from back of the array
//         rightBondryArray[i] = Math.max(trappedWaterArray[i], rightBondryArray[i + 1]);
//     }

//     // apply the formula and then return the result
//     let trappedRainWater: number = 0;
//     for (let i = 0; i < trappedWaterArray.length; i++) {
//         trappedRainWater += ((Math.min(leftBoundryArray[i], rightBondryArray[i])) - trappedWaterArray[i]) * 1;      // formula :- ( water height - bar height ) * bar width
//     }
//     return trappedRainWater;

// }
// const trappedWaterArray: number[] = [4, 2, 0, 6, 3, 2, 5];
// console.log("Total trapped water is :- " + calculateTrappingRainWater(trappedWaterArray));