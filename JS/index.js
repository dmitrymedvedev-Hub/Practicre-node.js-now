function longest(s1, s2) {
  const joinStrings = s1.concat(s2);
  
  return joinStrings
    .split('')
    .filter((item, index, arr) => arr.indexOf(item) === index)
    // .sort((a, b) => a.localeCompare(b))
    // .join('');
}

let name = "Daniel";
let surname = "Boss";
console.log(name.concat(surname))
console.log(longest("Hello Daniel","boss Daniel"));


console.log(name.indexOf("D"));


Math.max()