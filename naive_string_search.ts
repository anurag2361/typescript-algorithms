function naiveStringSearch(str: string, searchString: string) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < searchString.length; j++) {
            if (searchString[j] !== str[i + j]) break;
            if (j === searchString.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveStringSearch("king shark is a shark", "shark"));
