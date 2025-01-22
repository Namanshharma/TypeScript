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


namespace PracticeSprint2 {

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
    // const trappedRainWater = (array: number[]): void => {
    //     printArray(array); console.log();
    //     // calculate the left max boundry for this we need to make the auxiliary array
    //     const leftMaxBoundryArray: number[] = new Array(array.length);
    //     leftMaxBoundryArray[0] = array[0];
    //     for (let i: number = 1; i <= array.length - 1; i++) {                          // also remember about the loop from where it should start for which array
    //         leftMaxBoundryArray[i] = Math.max(array[i], leftMaxBoundryArray[i - 1]);             // always remember how to calculate the left boundry
    //     }
    //     printArray(leftMaxBoundryArray);
    //     console.log();
    //     // calculate the right max boundry
    //     const rightMaxBoundryArray: number[] = new Array(array.length);
    //     rightMaxBoundryArray[array.length - 1] = array[array.length - 1];
    //     for (let i: number = array.length - 2; i >= 0; i--) {
    //         rightMaxBoundryArray[i] = Math.max(array[i], rightMaxBoundryArray[i + 1]);
    //     }
    //     printArray(rightMaxBoundryArray);
    //     console.log();
    //     let trappedWater: number = 0;
    //     // now compare those and use the formaula       ==> ( Water height - bar height ) * bar width
    //     for (let i: number = 0; i < array.length; i++) {
    //         trappedWater += ((Math.min(leftMaxBoundryArray[i], rightMaxBoundryArray[i])) - array[i]) * 1;        // always subtract the bar height from water height
    //     }
    //     process.stdout.write("Here is the total rain water trapped :- " + trappedWater);
    // }
    // trappedRainWater([4, 2, 0, 6, 3, 2, 5]);

    // perfect time to sell and buy stocks
    // const buySellStocks = (array: number[]): void => {
    //     let buyPrice: number = array[0]; let maxProfit: number = 0;
    //     for (let i: number = 1; i < array.length; i++) {
    //         buyPrice = Math.min(buyPrice, array[i]);
    //         const profit: number = array[i] - buyPrice;
    //         maxProfit = Math.max(maxProfit, profit);
    //     }
    //     process.stdout.write("Max profit till now :- " + maxProfit);
    // }
    // buySellStocks([7, 1, 5, 3, 6, 4]);

    // print the spiral matrix
    // const printSpiral = (array: number[][]): void => {
    //     let startRow: number = 0; let endRow: number = array.length - 1;     // always remember about the starting and ending of
    //     let startColumn: number = 0; let endColumn: number = array[0].length - 1;        // rows and columns
    //     while (startRow <= endRow && startColumn <= endColumn) {
    //         for (let i: number = startColumn; i < endColumn; i++) {
    //             process.stdout.write(array[startRow][i] + " ");
    //         }
    //         for (let j: number = startRow; j <= endRow; j++) {
    //             process.stdout.write(array[j][endColumn] + " ");
    //         }
    //         for (let i: number = endColumn - 1; i >= startColumn; i--) {
    //             process.stdout.write(array[endRow][i] + " ");
    //         }
    //         for (let j: number = endRow - 1; j > startRow; j--) {
    //             process.stdout.write(array[j][startColumn] + " ");
    //         }
    //         startRow++; startColumn++; endRow--; endColumn--;
    //     }
    // }
    // printSpiral([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);

    // print Diagonal sum
    // const printDiagonalSum = (array: number[][]): void => {
    //     let diagonalSum: number = 0;
    //     for (let i: number = 0; i < array.length; i++) {
    //         diagonalSum += array[i][i] + array[i][array.length - 1 - i];            // always remember the most optimized way to achieve this
    //     }
    //     process.stdout.write("Diagonal Sum of this array :- " + diagonalSum);
    // }
    // printDiagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);

    // stair case search
    // const stairCaseSearch = (array: number[][], key: number): string => {
    //     let row: number = 0; let column: number = array.length - 1;
    //     while (row <= array.length - 1 && column >= 0) {                          // in this the main thing is to remember about the LOOP from where it should
    //         if (key == array[row][column]) {                                  // start for the row and end for the columns
    //             return `Key is present at ${row},${column}`;
    //         }
    //         else if (key > array[row][column]) row++;
    //         else column--;
    //     }
    //     return "Key is not present in this matrix";
    // }
    // console.log(stairCaseSearch([[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]], 51));

    // check if the string is palindrome or not
    // const checkPalindromeString = (str: string): boolean => {
    //     for (let i: number = 0; i < str.length; i++) {
    //         if (str.charAt(i) != str.charAt(str.length - 1 - i)) return false;
    //     }
    //     return true;
    // }
    // console.log(checkPalindromeString("racecar") ? "It's Palindrome" : "Not a palindrome");

    // find the shortest path to reach at the given direction
    // const shortestPath = (str: string): void => {
    //     str.toUpperCase();
    //     let x1: number = 0, x2: number = 0, y1: number = 0, y2: number = 0
    //     for (let i: number = 0; i < str.length; i++) {
    //         if (str.charAt(i) == "N") y2++;
    //         else if (str.charAt(i) == "S") y2--;
    //         else if (str.charAt(i) == "E") x2++;
    //         else x2--;
    //     }
    //     process.stdout.write("Here is the shortest path of given string :- " + Math.floor(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))));
    // }
    // shortestPath("WNEENESENNNEEENNN")

    // print the largest string by Lexicographic order
    // const largestStringByLexicographicOrder = (array: string[]): void => {
    //     let largestString: string = array[0];
    //     for (let i: number = 1; i < array.length - 1; i++) {
    //         if (largestString.localeCompare(array[i]) < 0) largestString = array[i];
    //     }
    //     process.stdout.write(largestString);
    // }
    // largestStringByLexicographicOrder(["apple", "mango", "banana"]); // neeed to remember the name of the function

    // Convert each letter into uppercase
    // const convertToUpperCase = (str: string): void => {
    //     let responseString = str.charAt(0).toUpperCase();
    //     for (let i: number = 1; i < str.length; i++) {
    //         if (str.charAt(i) == " " && i < str.length) {
    //             responseString += str.charAt(i);
    //             responseString += str.charAt(i + 1).toUpperCase();  // remember to include the space as well in the original string
    //             i++;
    //         }
    //         else { responseString += str.charAt(i); }       // rememeber to skip the i++ in else block
    //     }
    //     console.log(responseString);
    // }
    // convertToUpperCase("hi, my name is naman sharma and i am the best  ");

    // string compression
    // const stringCompression1 = (str: string): void => {
    //     let newString: string = "";
    //     for (let i: number = 0; i < str.length; i++) {
    //         let count: number = 1;
    //         while (str.charAt(i) == str.charAt(i + 1) && i < str.length - 1) { count++; i++; }  // always remember the condition
    //         newString += str.charAt(i);
    //         if (count > 1) newString += count;     // also remember to append the count only in string if it is greater that 1
    //     }
    //     console.log(newString);
    // }
    // stringCompression1("aaaabbbccdddd");

    // Algorithms :- Bubble Sort with worst case TC :- O(n^2) and best case time complexity TC :- O(log(n))
    // const bubbleSort = (array: number[]): void => {
    //     for (let i: number = 0; i < array.length; i++) {
    //         let isSwap: boolean = false;
    //         for (let j: number = i + 1; j < array.length; j++) {
    //             if (array[i] > array[j]) {
    //                 const temp = array[i];
    //                 array[i] = array[j];
    //                 array[j] = temp;
    //                 isSwap = true
    //             }
    //         }
    //         if (isSwap == false) {
    //             break;
    //         }
    //     }
    // }
    // bubbleSort(unsortedArrayy);

    // Seletion sort :- Idea --> From the unsorted array we need to pick the smallest and move it or in front of the array. Also, in this we will not do swap in the inner loop to avoid
    // unnecessay swaps
    // const selectionSort = (array: number[]): void => {
    //     for (let i: number = 0; i < array.length; i++) {
    //         let smallest: number = i;
    //         for (let j: number = i + 1; j < array.length; j++) {
    //             if (array[j] < array[smallest]) {
    //                 smallest = j;
    //             }
    //         }
    //         const temp = array[i];
    //         array[i] = array[smallest];
    //         array[smallest] = temp;
    //     }
    // }
    // selectionSort(unsortedArrayy);

    // Insertion sort :- Idea --> Assume the first element of an array is sorted array and from the remaining array we will pick the first element then backtrack it to sorted array at its
    // appropiate position
    // const insertionSort = (array: number[]): void => {
    //     for (let i: number = 1; i < array.length; i++) {
    //         let temp: number = array[i];
    //         let j: number = i - 1;
    //         while (j >= 0 && array[j] > temp) {
    //             array[j + 1] = array[j];
    //             j--;
    //         }
    //         array[j + 1] = temp;
    //     }
    // }
    // const unsortedArrayy: number[] = [4, 2, 5, 6, 1, 9, 3];
    // insertionSort(unsortedArrayy);
    // printArray(unsortedArrayy);


    // ----------------------------------------------------------------------------- Practice sprint 3 ----------------------------------------------------------------------------------
    // print from 1-10
    // for (let i: number = 0; i <= 10; i++) { process.stdout.write(i + " "); }

    // print the sum of first N natural numbers
    // let sum: number = 0;
    // for (let i: number = 0; i <= 10; i++) {
    //     sum += i;
    // }
    // process.stdout.write(sum + "");

    // print the reverse of given number
    // let n: number = 684351315;
    // while (n > 0) {
    //     let lastDigit: number = n % 10;
    //     process.stdout.write(lastDigit + "");
    //     n = Math.floor(n / 10);
    // }

    // print the reverse of original number
    // let n: number = 763257; let finalNumber: number = 0;
    // while (n > 0) {
    //     let lastDigit: number = n % 10;
    //     finalNumber = lastDigit + (finalNumber * 10);
    //     n = Math.floor(n / 10);
    // }
    // process.stdout.write(finalNumber+"");

    // check if the number is prime or not
    // const checkPrime = (n: number): boolean => {
    //     if (n == 1 || n == 2) return true;
    //     let isPrime: boolean = true;
    //     for (let i: number = 2; i <= Math.sqrt(n); i++) {
    //         if (n % i == 0) {
    //             return false;
    //         }
    //     }
    //     return isPrime;
    // }
    // console.log(checkPrime(9));

    // print right angle triangle
    // let n: number = 5;
    // for (let i: number = 0; i <= n; i++) {
    //     for (let j: number = 0; j <= i; j++) {
    //         process.stdout.write("*");
    //     }
    //     console.log();
    // }

    // Binary search
    // const binarySearch = (array: number[], key: number): number => {
    //     let start: number = 0; let end: number = array.length;
    //     while (start <= end) {
    //         let mid: number = Math.floor(start + ((end - start) / 2));
    //         if (array[mid] == key) {
    //             return mid;
    //         } else if (key > array[mid]) {
    //             start = mid + 1;
    //         } else {
    //             end = mid - 1;
    //         }
    //     }
    //     return -1;
    // }
    // console.log(binarySearch(sortedArr, 35));

    // print the reverse of an array
    // const printReverse = (array: number[]): void => {
    //     for (let i: number = 0; i <= Math.floor(array.length / 2); i++) {
    //         let temp: number = array[i];
    //         array[i] = array[array.length - i - 1];
    //         array[array.length - i - 1] = temp;
    //     }
    // }
    // printReverse(unsortedArray);
    // printArray(unsortedArray);

    // const printThePairs = (array: number[]): void => {
    //     for (let i: number = 0; i < array.length; i++) {
    //         for (let j = i + 1; j < array.length; j++) {
    //             process.stdout.write(array[i] + "," + array[j] + "\t")
    //         }
    //         console.log();
    //     }
    // }
    // printThePairs(sortedArr);

    // const printSubArray = (array: number[]): void => {
    //     let maxSum: number = 0;
    //     for (let i: number = 0; i < array.length; i++) {
    //         for (let j: number = i + 1; j < array.length; j++) {
    //             let sum: number = 0;
    //             for (let k: number = i; k <= j; k++) {
    //                 process.stdout.write(array[k] + " ")
    //                 sum += array[k];
    //             }
    //             process.stdout.write("\t" + sum);
    //             process.stdout.write("\n");
    //             maxSum = Math.max(maxSum, sum);
    //         }
    //         process.stdout.write("\n");
    //     }
    //     process.stdout.write("Max sum of sub array is :- " + maxSum);
    // }
    // printSubArray(sortedArr);

    const printArray = (array: number[]): void => {
        for (let i: number = 0; i < array.length; i++) {
            process.stdout.write(array[i] + " ");
        }
    }
    const sortedArr: number[] = [2, 4, 5, 6, 8, 10, 12, 15, 18, 21, 22];
    const unsortedArray: number[] = [23, 434, 2342, 5, 24, 33, 5, 6456, 34, 64, 5, 23, 23, 545, 87, 976, 678, 6756];

    // const KadansAlgorithm = (array: number[]): void => {
    //     let currentSum: number = 0; let kadanSum: number = 0;
    //     for (let i: number = 0; i < array.length; i++) {
    //         currentSum += array[i];
    //         if (currentSum > 0)
    //             kadanSum = Math.max(kadanSum, currentSum);
    //         else
    //             currentSum = 0;
    //     }
    //     process.stdout.write("Max sum from Kadan's Algorithm :- " + kadanSum);
    // }
    // KadansAlgorithm([5, -3, 5]);

    // spiral matrix
    // const printSpiral = (array: number[][]): void => {
    //     let startRow: number = 0; let endRow: number = array.length - 1; let startColumn: number = 0; let endColumn: number = array[0].length - 1;
    //     while (startRow <= endRow && startColumn <= endColumn) {
    //         for (let i: number = startColumn; i < endColumn; i++) {
    //             process.stdout.write(array[startRow][i] + " ");
    //         }
    //         for (let j: number = startRow; j <= endRow; j++) {
    //             process.stdout.write(array[j][endColumn] + " ");
    //         }
    //         if (startRow != endRow) {
    //             for (let i: number = endColumn - 1; i >= startColumn; i--) {
    //                 process.stdout.write(array[endRow][i] + " ");
    //             }
    //         }
    //         if (startColumn != endColumn) {
    //             for (let j: number = endRow - 1; j > startRow; j--) {
    //                 process.stdout.write(array[j][startColumn] + " ");
    //             }
    //         }
    //         startRow++; endRow--; startColumn++; endColumn--;
    //     }
    // }
    // printSpiral([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);

    // const diagonalSum = (array: number[][]): void => {
    //     let diagonalSum: number = 0;
    //     for (let i: number = 0; i < array.length; i++) {
    //         diagonalSum += array[i][i];
    //         if (i != array.length - i - 1) {
    //             diagonalSum += array[i][array.length - i - 1];
    //         }
    //     }
    //     process.stdout.write(diagonalSum + " ");
    // }
    // diagonalSum([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);

    // const stairCaseSearch = (array: number[][], key: number): void => {
    //     let row: number = 0; let column: number = array[0].length - 1;
    //     while (row < array.length && column >= 0) {
    //         if (array[row][column] == key) {
    //             process.stdout.write("Key is present at :- " + row + "," + column);
    //             return;
    //         } else if (key > array[row][column]) {
    //             column--
    //         } else {
    //             row++;
    //         }
    //     }
    //     process.stdout.write("Key is not present in the matrix");
    // }
    // stairCaseSearch([[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]], 25);
    // stairCaseSearch([
    //     [16, 15, 14, 13],
    //     [12, 11, 10, 9],
    //     [8, 7, 6, 5],
    //     [4, 3, 2, 1]
    // ], 6);

    // const checkIfStringIsPalindrome = (str: string): boolean => {
    //     for (let i: number = 0; i < Math.floor(str.length / 2); i++) {
    //         if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // console.log(checkIfStringIsPalindrome("arr"));

    // const checkIfStringIsAnagram = (str1: string, str2: string): boolean => {
    //     if (str1.split("").sort().join("") != str2.split("").sort().join("")) {
    //         return false;
    //     }
    //     return true;
    // }
    // console.log(checkIfStringIsAnagram("asdfasdf", "fasdfasd"));

    // const findTheShortestPath = (str: string): void => {
    //     let x2: number = 0; let y2: number = 0;
    //     for (let i: number = 0; i < str.length; i++) {
    //         if (str.charAt(i) == "N") { y2++; }
    //         else if (str.charAt(i) == "S") { y2--; }
    //         else if (str.charAt(i) == "E") { x2++; }
    //         else { x2--; }
    //     }
    //     process.stdout.write(Math.floor(Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2))) + " ");
    // }
    // findTheShortestPath("SSWWNNNEEEESSEEWWNNN");

    // const printLargestStringInLexicographicOrder = (array: string[]): void => {
    //     let largetString: string = array[0];
    //     for (let i: number = 1; i < array.length; i++) {
    //         if (largetString.localeCompare(array[i]) < 0) {                         // rememeber tha Local compare method always gives comparision from 0
    //             largetString = array[i];
    //         }
    //     }
    //     process.stdout.write(largetString);
    // }
    // printLargestStringInLexicographicOrder(["asdfasdfas", "namansharma", "isbestinWorld"]);

    // const convertFirstLetterToUpperCase = (str: string): void => {
    //     let newString: string = ""; newString += str.charAt(0).toUpperCase();
    //     for (let i: number = 1; i < str.length; i++) {
    //         if (str.charAt(i) == " ") {
    //             newString += str.charAt(i);
    //             newString += str.charAt(i + 1).toUpperCase();
    //             i++;
    //         } else {
    //             newString += str.charAt(i);
    //         }
    //     }
    //     process.stdout.write(newString);
    // }
    // convertFirstLetterToUpperCase("i am best in the world!");

    // const stringCompression = (str: string): void => {
    //     let newString: string = "";
    //     for (let i: number = 0; i < str.length; i++) {
    //         let count: number = 1;
    //         while (str.charAt(i) == str.charAt(i + 1) && i < str.length) {
    //             count++;
    //             i++;
    //         }
    //         newString += str.charAt(i);
    //         if (count > 1) {
    //             newString += count;
    //         }
    //     }
    //     process.stdout.write(newString);
    // }
    // stringCompression("aaaaaaassssssddddddggggg");

    // -------------------------------------------------------------------------- Recurssion ------------------------------------------------------------------------------------
    // const printDecreasingOrder = (n: number): void => {
    //     if (n == 0) return;
    //     process.stdout.write(n + " ");
    //     printDecreasingOrder(n - 1);
    // }
    // printDecreasingOrder(10);

    // const printIncreasingOrder = (n: number): void => {
    //     if (n == 0) return;
    //     printIncreasingOrder(n - 1);
    //     process.stdout.write(n + " ");
    // }
    // printIncreasingOrder(10);

    // const printFactorial = (n: number): number => {
    //     if (n == 0) return 1;
    //     return n * printFactorial(n - 1);
    // }
    // console.log(printFactorial(5));

    // const printSumOfFirstNNaturalNumbers = (n: number): number => {
    //     if (n == 0) return 0;
    //     return n + printSumOfFirstNNaturalNumbers(n - 1);
    // }
    // console.log(printSumOfFirstNNaturalNumbers(50));

    // const printNthFibonacciNumber = (n: number): number => {
    //     if (n == 1 || n == 0) return n;
    //     return printNthFibonacciNumber(n - 1) + printNthFibonacciNumber(n - 2);
    // }
    // console.log(printNthFibonacciNumber(7));

    const printFibonacciSeriesTillNthNumber = (n: number): number => {
        if (n == 0 || n == 1) return n;
        
    }
}