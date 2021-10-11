// function to return the product of an array 
// [1,2,3] returns 6

function productOfArray(array: Array<number>): number {
    if (array.length === 0) return 1;
    return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3]));
