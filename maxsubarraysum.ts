// sliding window pattern
// pass an array and a number. Find max sum of subarray with the length of the number
// e.g. ([1,2,3],2) should result in 5

function maxSubarraySum(array: number[], value: number): number | null {
    if (array.length < value) return null;
    let tempSum = 0, maxSum = 0;
    for (let i = 0; i < value; i++) {
        maxSum = maxSum + array[i];
    }
    tempSum = maxSum;
    for (let i = value; i < array.length; i++) {
        tempSum = tempSum - array[i - value] + array[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
