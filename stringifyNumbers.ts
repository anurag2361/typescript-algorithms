function stringifyNumbers(obj: any) {
  let newObj: any = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}



console.log(stringifyNumbers({
  num: 1,
  test: [1],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}));
