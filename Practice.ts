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
const array: number[] = [23, 43, 5, 6, 3, 333, 23, 53, 567, 9764, 7454, 32, 324, 53];
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
// console.log("Total trapped water is :- " + calculateTrappingRainWater(trappedWaterArray));           // TC :- O(n) <<---- derived from the array which we passed as an argument

// Bug and sell stocks                                      Formula :- Profit = SellPrice - BuyPrice;
// const buySellStocks = (stocksPrice: number[]): number => {
//     let buyPrice: number = Number.MAX_SAFE_INTEGER; let maxProfit: number = 0;
//     for (let i: number = 0; i < stocksPrice.length; i++) {
//         if (buyPrice < stocksPrice[i]) {
//             const profit: number = stocksPrice[i] - buyPrice;
//             maxProfit = Math.max(maxProfit, profit);
//         }
//         else {
//             buyPrice = stocksPrice[i];
//         }
//     }
//     return maxProfit;
// }
// const stocksPrice: number[] = [7, 1, 5, 3, 6, 4];
// console.log("Max profit is :- " + buySellStocks(stocksPrice));              // TC :- O(n)


// ---------------------------------------------------------------------- 2-D arrays -----------------------------------------------------------------------------------------------------

// const twoDArray = new Array(3).fill(Array(3))                                This is how we can declare the 2-D array in js

// Spiral matrix                    <<---- to resolve this, mainly we need to consider the border cases of our matrix like startRow, endRow , startColumn and endColumn
// const printSpiralMatrix = (array: number[][]): void => {
//     let startRow: number = 0; let endRow: number = array.length - 1; //3
//     let startColumn: number = 0; let endColumn: number = array[0].length - 1 // 3;
//     while (startRow <= endRow && startColumn <= endColumn) {                                 // condition is very important in this case
//         for (let i = startColumn; i <= endColumn; i++) {
//             process.stdout.write(array[startRow][i].toString() + " ");                                             // top row
//         }
//         for (let j = startRow; j < endRow; j++) {
//             process.stdout.write(array[j + 1][endColumn].toString() + " ");                                        // right column
//         }
//         for (let i = endColumn; i > startColumn; i--) {
//             if (startColumn == endColumn) {
//                 break;
//             }
//             process.stdout.write(array[endRow][i - 1].toString() + " ");                                           // bottom row
//         }
//         for (let j = endRow - 1; j > startRow; j--) {
//             if (startRow == endRow) {
//                 break;
//             }
//             process.stdout.write(array[j][startColumn].toString() + " ");                                          // left column
//         }
//         startRow++; startColumn++; endRow--; endColumn--;
//     }
// }
// const spiralArray: number[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// printSpiralMatrix(spiralArray);

// Diagonal sum
// const diagonalSum = (array: number[][]): void => {
//     let primaryDiagonalSum: number = 0; let secondayDiagonalSum: number = 0;
//     for (let i: number = 0; i < array.length; i++) {
//         primaryDiagonalSum += array[i][i];
//         if (i != array.length - 1 - i) {
//             secondayDiagonalSum += array[i][array.length - i - 1];
//         }
//     }
//     process.stdout.write("Total Diagonal sum is :- " + (primaryDiagonalSum + secondayDiagonalSum));
// }
// const diagonalMatrix: number[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// diagonalSum(diagonalMatrix);                            // O(n) optimized approach but for the brute force we can use the nested two loops here

// // Stair case search or search in a sorted matrix
// const searchInSortedMatrix = (array: number[][], key: number): boolean => {
//     let row: number = 0; let column: number = array[0].length - 1;         // by definig the row = 0 and column = 3 we are stating that we are starting from top right cell of matrix
//     while (row < array.length && column >= 0) {                            // if we want to start from the 2nd corner case like left bottom then our row and column initialization will changes
//         if (array[row][column] == key) {
//             process.stdout.write("Key is found at :- " + row + "," + column + "\t");
//             return true;
//         }
//         else if (key > array[row][column]) { row++; }
//         else { column--; }
//     }
//     return false;
// }
// const searchMatrix: number[][] = [[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]];
// searchInSortedMatrix(searchMatrix, 39) == true ? console.log("Key is present") : console.log("Key does not exists in matrix");


// ------------------------------------------------------------------------------- Strings -----------------------------------------------------------------------------------------
// In JavaScript, Length is a property in Array and Strigs unlike in java we have Length method in Strings whereas Length is a property in Arrays
// Also remember, Strings are IM-MUTABLE <<---- Which means

// Check if the string is palindrome or not
// const checkPalindrome = (str: string): boolean => {
//     for (let i: number = 0; i <= Math.ceil(str.length / 2); i++) {
//         if (str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
//     }
//     return true;
// }
// console.log(checkPalindrome("palindrome"));                                       // O(n)

// Find the shortest path to reach at the given direction
// const findDirection = (str: string): number => {
//     str = str.toUpperCase();
//     let x1: number = 0; let y1: number = 0; let x2: number = 0; let y2: number = 0;
//     for (let i: number = 0; i < str.length; i++) {
//         if (str.charAt(i) === "W") x2--;
//         else if (str.charAt(i) === "E") x2++;
//         else if (str.charAt(i) === "N") y2++;
//         else y2--;
//     }
//     return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
// }
// console.log(findDirection("WNEENESENNN"));      // For the displacement, we need to use sqrt((x2 - x1)^2 + (y2-y1)^2)

// For the given set of strings , print the largest string by LEXICOGRAPHICALLY
// const largestString = (stringArray: string[]): void => {
//     let largestString: string = stringArray[0];
//     for (let i: number = 0; i < stringArray.length; i++) {
//         if (largestString.localeCompare(stringArray[i]) < 0) {
//             largestString = stringArray[i];
//         }
//     }
//     process.stdout.write(largestString);
// }
// largestString(["apple", "mango", "banana"]);  // O ( n * x ) where X is the length of string and n is hte number of strings present in array like length of an array because localeCompare method goes char by char and check which char is greater

// Convert each letter of word into uppercase
// const firstLetterToUpperCase = (str: string): void => {
//     let newString = str.charAt(0).toUpperCase();
//     for (let i: number = 1; i < str.length; i++) {
//         if (str.charAt(i) == " " && i < str.length) {
//             newString += str.charAt(i);
//             newString += str.charAt(i + 1).toUpperCase();
//             i++;
//         }
//         else
//             newString += str.charAt(i);
//     }
//     process.stdout.write(newString);
// }
// firstLetterToUpperCase("hi! my name is naman sharma");                      // O(n)

// String Compression like aaabbbccdddd     ---->>      a3b3c2d4
// const stringCompression = (str: string): void => {
//     let responseString: string = "";
//     for (let i: number = 0; i < str.length; i++) {
//         let number = 1;
//         while (str.charAt(i) == str.charAt(i + 1) && i < str.length - 1) { number++; i++; }
//         responseString += str.charAt(i);
//         if (number > 1) { responseString += number; }
//     }
//     process.stdout.write(responseString);
// }
// stringCompression("aaaabbbccdddd");              // TC :- O(n)


// ------------------------------------------------------------------------------ Recursion ----------------------------------------------------------------------------------------------

// print the number from n - 1 in decreasing order
// const printDecreasingOrder = (n: number): void => {
//     process.stdout.write(n + " ");
//     if (n == 1) return;
//     n -= 1;
//     printDecreasingOrder(n);
// }
// printDecreasingOrder(10);

// print the number from 1 - n in increasing order
// const printIncreasingOrder = (n: number): void => {
//     if (n == 0) return;
//     printIncreasingOrder(n - 1);
//     process.stdout.write(n + " ");
// }
// printIncreasingOrder(10);

// Print the factorial of number n
// const printFactorial = (n: number): number => {
//     if (n == 0) return 1;
//     return n * printFactorial(n - 1);
// }
// console.log(printFactorial(3));

// print sum of first N natural numbers
// const printSum = (n: number): number => {
//     if (n == 0) return 0;
//     return n + printSum(n - 1);
// }
// console.log(printSum(5));

// print the Nth fibonacci number
// const printFibonacci = (n: number): number => {
//     if (n == 0 || n == 1) return n;
//     return printFibonacci(n - 1) + printFibonacci(n - 2);
// }
// console.log(printFibonacci(21));                             TC :- O(2^n)  <<---- worst time complexity so in future we will learn about DP

// print the fibonacci series till Nth term
// const printFibonacciSeries = (a: number, b: number, n: number, count: number): void => {
//     if (count == n) { return }
//     let c = a + b;
//     process.stdout.write(c.toString() + ", ");
//     count++;
//     printFibonacciSeries(b, c, n, count);
// }
// process.stdout.write("0, 1, ");
// printFibonacciSeries(0, 1, 35 - 2, 0);

// Check if the given array is sorted or not
// const checkForSortedArray = (array: number[], i: number): void => {
//     if (array[i] > array[i + 1]) { process.stdout.write("Not sorted"); return; }
//     if (i == array.length - 1) { process.stdout.write("Sorted"); return; }
//     checkForSortedArray(array, i + 1);
// }
// checkForSortedArray(sortedArray, 0);                                         TC :- O(n)

// Find the first occurance of an element in an array
// const firstOccurance = (array: number[], i: number, key: number): void => {
//     if (array[i] == key) {
//         process.stdout.write("Key is found at :- " + i)
//         return;
//     }
//     if (i == array.length - 1) {
//         process.stdout.write("Key does not exist");
//         return;
//     }
//     firstOccurance(array, i + 1, key);
// }
// firstOccurance(array, 0, 53);                                            TC :- O(n)

// Find the last occurance of an array
// const findTheLastOccurance = (array: number[], i: number, key: number): number => {
//     if (i == array.length - 1) return -1;
//     let found = findTheLastOccurance(array, i + 1, key);
//     if (found != -1 && array[i] == key) {
//         return found;
//     }
//     return i;
// }
// console.log(findTheLastOccurance([2, 4, 12, 32, 64, 2, 3, 75, 99, 87, 88, 3], 0, 3));

// print x^n
// const printXPowerN = (x: number, n: number): number => {
//     if (n == 0) return 1;
//     else if (x == 0) return 0;
//     return (x * printXPowerN(x, n - 1));                     // also remember the formula
// }
// console.log(printXPowerN(2, 12));                            // remember here we have 2 base cases           // brute force approach     TC :- O(n)

// print x^n by using optimized approach
// const printXPowerNOptimized = (x: number, n: number): number => {
//     if (n == 0) return 1; if (x == 0) return 0;
//     let calculatePower = printXPowerNOptimized(x, Math.floor(n / 2));
//     if (Math.floor(n % 2) != 0) return calculatePower * calculatePower * x;
//     return calculatePower * calculatePower
// }
// console.log(printXPowerNOptimized(2, 10));                           // optimized approach TC :- O(log(n));

// Tower of Hanoi -- Recursion problem                      ( RULES :- Always move one disc in one step;        :- Always place smaller disc on top of bigger one )
// for this problem, we generally used Source tower , Helper tower and Destination tower
// Let's take an example of 3 discs in which
// ==> Initially, all 3 discs are presents in Soruce tower and in this case, we will move n-1 discs ( 2 ) in Helper tower by taking help from Destination tower by making Destination
//     tower as Helper tower. It means move 3rd disc to Helper tower ( 1st step ) and then 2nd disc to Destination tower (2nd step) and then from Helper tower pick 3rd disc and move
//     it to the Destination tower ( 3rd step )
// ==> Situation, back from the 1st step in our Source tower we have 1st disc , in our Helper tower we have 2nd and 3rd disc and our Destination tower is empty.
// ==> Now, pick the 1st disc from Source tower and move it to the Destination tower ( 4th )
// ==> Situation, our Source tower is empty , Helper tower is having 2nd and 3rd disc and our Destination tower is having 1st disc.
// ==> Now, we will take the help from Source tower by making it Helper tower and our helper tower will act as Source tower. Now, we will move 3rd disc from newly Source tower to
//     helper tower ( 5th step ). After this, move 2nd disc from Source tower to our original Destination tower (6ht step). And finally, move 3rd disc from Source tower to Destination
//     tower (7th step).
// APPROACH ----->>>>>>> Always move n-1 disc to Helper tower and then move nth disc to Destination tower. And then by making the Source tower as helper tower and vica versa move n-1
//                       discs to Destination tower by taking help from remaining 2 towers.
// const towerOfHanoi = (disc: number, source: string, helper: string, destination: string): void => {
//     if (disc == 1) {
//         process.stdout.write(`Moving ${disc}nd Disc from ${source} to ${destination}\n`);  // always remember that this problem will not return any thing just print the cases inside it
//         return;
//     }
//     towerOfHanoi(disc - 1, source, destination, helper);                             As per our Approach // always move n-1 disc to Helper
//     process.stdout.write(`Moving ${disc}nd Disc from ${source} to ${destination}\n`);                    // Moving n disc to Destination
//     towerOfHanoi(disc - 1, helper, source, destination);                             As per our Approach // move n-1 to Destination
// }
// towerOfHanoi(3, "Source", "Helper", "Destination");