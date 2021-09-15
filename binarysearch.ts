import { bubbleSort } from "./bubblesort";

function binarySearch(array: Array<number>, value: number) {
    array = bubbleSort(array);
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    while (array[middleIndex] !== value && firstIndex < lastIndex) {
        if (array[middleIndex] < value) {
            firstIndex = middleIndex + 1;
        } else if (array[middleIndex] > value) {
            lastIndex = middleIndex - 1;
        }
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }
    return array[middleIndex] === value ? middleIndex : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
