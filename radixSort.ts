interface ArrayConstructor {
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>;
    from<T>(arrayLike: ArrayLike<T>): Array<T>;
}

/**
 * Returns digit in ith place of number num. in 7214, it will return 7 for 3rd place.
 * @param num - number for which digit is to be calculated.
 * @param i - place of digit.
 */
function getDigit(num: number, i: number) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
/**
 * Get number of digits in num.
 * @param num 
 */
function digitCount(num: number) {
    if (num === 0) return 1;
    return Math.log(num) * Math.LOG10E + 1 | 0;
}

/**
 * Find max value from a number array
 * @param nums number array
 */
function mostDigits(nums: number[]) {
    let max: number[] = [];
    nums.map((num) => {
        max.push(digitCount(num));
    });
    return Math.max(...max);
}

/**
 * Perform radix sort algorithm on a number array.
 * @param nums - number array
 */
function radixSort(nums: number[]) {
    // Determine the largest number of digits in the array
    const largestNum = mostDigits(nums);
    for (let x = 0; x < largestNum; x++) {
        // create empty arrays for bucketing of kth place digits in array values.
        const digitBuckets = Array.from({ length: 10 }, () => []);
        // putting values in buckets.
        for (let y = 0; y < nums.length; y++) {
            digitBuckets[getDigit(nums[y], x)].push(nums[y]);
        }
        // combining all buckets to form a single array.
        nums = [].concat(...digitBuckets);
    }
    // return array after combining is one after all iterations
    return nums;
}

console.log(radixSort([123, 4567, 34242366, 7854662]));
