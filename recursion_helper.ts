function rescursion_helper(arr: Array<number>) {
    let result: Array<number> = [];
    function helper(helperInput: Array<number>) {
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 === 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

console.log(rescursion_helper([1, 2, 3, 4, 5, 6, 7, 8]));
