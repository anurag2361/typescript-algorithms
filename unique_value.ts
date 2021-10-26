// by multiple pointer
function uniqueValue(arr: any[]) {
    arr.sort(function (a, b) { return a - b });
    let p1 = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[p1] !== arr[i]) {
            p1++;
            arr[p1] = arr[i];
        }
    }
    return p1 + 1;
}

console.log(uniqueValue([1, 2, 3, 4, 5, 7, 5, 6, 1, 2]))
