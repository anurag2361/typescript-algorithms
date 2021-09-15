// write a function to accept array and a value. If the average of a pair of values in the array 
// result to the value, return true else false

function averagePair(arr: Array<number>, avg: number): boolean {
    if (arr.length === 0) return false;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        let currentAvg: string = (sum / 2).toString();
        if (parseFloat(currentAvg) === avg) {
            return true;
        } else if (parseFloat(currentAvg) > avg) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
