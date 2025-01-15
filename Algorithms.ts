const printArrayAgain = (array: number[]): void => {
    for (let i: number = 0; i < array.length; i++) {
        process.stdout.write(array[i] + " ");
    }
}
// Bubble sort
// const bubbleSort = (array: number[]): void => {
//     for (let i: number = 0; i < array.length; i++) {
//         for (let j: number = 0; j < array.length - 1 - i; j++) {
//             if (array[j] > array[j + 1]) {
//                 const temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
// }
const bubbleArray: number[] = [5, 4, 2, 1, 3];
// bubbleSort(bubbleArray);                                         // TC : O(n^2) for best and worst case
// printArrayAgain(bubbleArray);

// Optimized Bubble Sort
// const bubbleSort = (array: number[]): void => {
//     for (let i: number = 0; i < array.length; i++) {
//         let isSwaped: boolean = false;
//         for (let j: number = 0; j < array.length - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 const temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//                 isSwaped = true;
//             }
//         }
//         if (isSwaped == false) break;
//     }
// }
// bubbleSort(bubbleArray);                                     // TC : O(n^2) for worst case if our array is total unsorted
// printArrayAgain(bubbleArray);                                // TC : O(n) for best case if our array is totally sorted