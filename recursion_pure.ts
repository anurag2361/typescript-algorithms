function rescursion_pure(arr: Array<number>) {
    let result: Array<number> = [];
    if (arr.length === 0) return result;
    if (arr[0] % 2 === 0) {
        result.push(arr[0]);
    }
    result = result.concat(rescursion_pure(arr.slice(1)));
    return result;
}

console.log(rescursion_pure([1, 2, 3, 4, 5, 6, 7, 8]));
