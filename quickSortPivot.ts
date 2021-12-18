/**
 * Swaps two elements.
 * @param array 
 * @param i - index of element to be swapped
 * @param j - index of element to swap with
 */
function swap(array: number[], i: number, j: number) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

/**
 * Returns index of the appropriate place of pivot element in the array.
 * @param arr 
 * @param start 
 */
function pivot(arr: Array<number>, start = 0) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i); // swap elements bigger than pivot with elements smaller than pivot
        }
    }
    swap(arr, start, swapIndex); // when array is iterated, swap pivot with the element in pivot's right position.
    return swapIndex;
}

/**
 * Sorts an array by Quick Sort algorithm
 * @param arr 
 * @param left 
 * @param right 
 */

function quickSort(arr: number[], left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left);
        //left portion
        quickSort(arr, left, pivotIndex - 1);
        //right portion
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([20, -1, 3, 7, 8, 2]));
