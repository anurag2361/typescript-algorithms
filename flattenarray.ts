const flatten = (array: Array<any>): Array<any> => {
    let newarray: Array<any> = [];
    array.forEach(value => {
        if (Array.isArray(value)) {
            newarray.push(...flatten(value));
        } else {
            newarray.push(value);
        }
    });
    return newarray;
}

const arr = [1, [2, [3]]];
const result = flatten(arr);
console.log(result);
