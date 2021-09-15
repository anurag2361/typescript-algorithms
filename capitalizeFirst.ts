// write a function to have an array of string and capitalize the first character
// of each string in the array

function capitalizeFirst(array: Array<string>): string[] {
    let newArr: string[] = [];
    function helper(arr: Array<string>) {
        for (let val of arr) {
            val = val.charAt(0).toUpperCase() + val.substr(1);
            newArr.push(val);
            arr.slice(1);
        }
    }
    helper(array);
    return newArr;
}

console.log(capitalizeFirst(["one", "two", "three"]));
