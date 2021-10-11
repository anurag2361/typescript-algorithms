function checkAnagram(str1: string | any[], str2: string | any[]) {
    if (str1.length !== str2.length) {
        return false;
    }
    let obj1 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] ? obj1[str1[i]]++ : obj1[str1[i]] = 1;
    }
    console.log(obj1);
    for (let i = 0; i < str2.length; i++) {
        if (!obj1[str2[i]]) {
            return false;
        } else {
            obj1[str2[i]]--;
        }
    }
    console.log(obj1);
    return true
}

const result = checkAnagram("anurag", "garuna");
console.log(result);