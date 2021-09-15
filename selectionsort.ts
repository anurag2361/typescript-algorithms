function selectionSort(arr: Array<number>) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) smallest = j;
        }
        if (i !== smallest) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([6, 5, 4, 3, 2, 1]));
