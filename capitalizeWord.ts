// write a function to have an array of string and capitalize
// each string in the array

function capitalizeWord(array: Array<string>, newArr: string[] = []): string[] {
    function helper(arr: Array<string>) {
        for (let val of arr) {
            newArr.push(val.toUpperCase());
            array.slice(1);
        }
    }
    helper(array);
    return newArr;
}

console.log(capitalizeWord(["one", "two", "three"]));
