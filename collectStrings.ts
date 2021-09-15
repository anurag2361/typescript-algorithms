// write a recursive function to accept an object and return an array of all values in
// object that have typeof string

function collectStrings(obj: {}, arr: Array<string> = []): Array<string> {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            arr = arr.concat(collectStrings(obj[key]));
        } else if (typeof obj[key] === 'string') {
            arr.push(obj[key]);
        }
    }
    return arr;
}

console.log(collectStrings({
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}));
