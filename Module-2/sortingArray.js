const numbers = [2, 42, 22, 4566,222, 100, 1, -3];
const sortedNumbers = numbers.sort((a, b) => a-b);
// console.log(numbers)  
//PECULIAR CASE: INLINE SORT , LIKE NUMBERS ALSO SORTED LIKE SORTEDNUMBERS
// console.log(sortedNumbers);

const color = ["red", "Yellow", "green", "Blue", "violate", "black", "Gern", "ample"];
color.sort((a, b) => a.localeCompare(b));
// console.log(color);


// NESTED FLAT ARRAY

const data = [12, 4, 5, [8, 987,[564, 987, 23]]];
const flatArray = data.flat(2);
const flatArray2 = data.flat(Infinity);
// console.log(flatArray);


const tags = [
    ["js", "react", "css"],
    ["html", "js", "node"],
    ["css", "php", "react"]
]
const uniqueTag = new Set(tags.flat()); //IT WILL CREATE OBJECT
const uniqueTag2 = [...new Set(tags.flat())];
console.log(uniqueTag2)