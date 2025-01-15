const printArrayAgain = (array: number[]): void => {
    for (let i: number = 0; i < array.length; i++) {
        process.stdout.write(array[i] + " ");
    }
}
// Bubble sort      <<---- Idea behind this :- Check the current element and by swaping it with adjacent element move it to the end of array
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
const bubbleArray: number[] = [5, 4, 2, 1, 3];                      // Always remember the loops from where it starts and where is ends
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
// }                                                            // Always remember the loops from where it starts and where is ends
// bubbleSort(bubbleArray);                                     // TC : O(n^2) for worst case if our array is total unsorted
// printArrayAgain(bubbleArray);                                // TC : O(n) for best case if our array is totally sorted

// Selection Sort       <<---- Pick the smallest from the unsorted array and put it at the beginning. Or pick the largest from unsorted array and put it at the end of array
// const selectionSort = (array: number[]): void => {
//     for (let i: number = 0; i < array.length - 1; i++) {
//         let smallest: number = i;
//         for (let j: number = i + 1; j < array.length; j++) {
//             if (array[smallest] > array[j]) {           // here we are trying to find the smallest element if some element is smaller from our ith or smallest
//                 smallest = j;                           // then that index we will put in the smallest variable and then we will swap it with ith element of array
//             }                                           // constantly we will not do the swaps again and again in the inner loop ( to avoid the unnecessary swaps )
//         }
//         const temp = array[smallest];
//         array[smallest] = array[i];
//         array[i] = temp;
//     }
// }
// selectionSort(bubbleArray);
// printArrayAgain(bubbleArray);

// Insertion Sort