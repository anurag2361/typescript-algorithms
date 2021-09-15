// function to take a number and add up all numbers from 0 to the passed number
// e.g. recursiveRange(6) will give 21

function recursiveRange(num: number): number {
    let total = 1;
    if (num === 1) {
        return total;
    }
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(4));
