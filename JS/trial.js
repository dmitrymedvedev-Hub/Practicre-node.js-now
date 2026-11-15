function findShort(s) {
    let newStringArray = s.split(" ");
    let minLength = newStringArray[0].length;
    let minIndex = 0; 

    for (let i = 1; i < newStringArray.length; i++) {

        if (newStringArray[i].length < minLength) {
            minLength = newStringArray[i].length; 
            minIndex = i;
        }
    }

  return minIndex;
}

console.log(findShort("I am Daniel Boss"));