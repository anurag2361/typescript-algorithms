// check if duplicate exist in array of number (by frquency counter)
function areThereDuplicates(arr: string | any[]): boolean {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(areThereDuplicates([1, 2, 3]));
