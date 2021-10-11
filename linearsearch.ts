function linearSearch(array: number[], value: number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
