// using multiple pointers pattern

function zeroPair(arr: any[]) {
    arr.sort(function (a, b) { return a - b });
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

const result = zeroPair([-3, -2, -1, 0, 1, 2, 3]);
console.log(result);
