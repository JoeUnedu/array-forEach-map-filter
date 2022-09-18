/*
Write a function called doubleValues which accepts an array and
 returns a new array with all the values in the array passed to the function 
 doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function doubleValues(arr) {
  let myNewDouble = [];
  arr.forEach(function (newDouble) {
    myNewDouble.push(newDouble * 2);
  });
  return myNewDouble;
}
let doubleValue = doubleValues([1, 2, 3]);
console.log(`double values`, doubleValue);

/*
Write a function called onlyEvenValues which accepts an array and 
returns a new array with only the even 
values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
  let eve = arr.filter(function (evens) {
    return evens % 2 === 0;
  });
  return eve;
}
let onlyEvenValuesHolder = onlyEvenValues([1, 2, 3]);
console.log(` only evens numbers `, onlyEvenValuesHolder);
/*
Write a function called showFirstAndLast which accepts an array of strings and 
returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
  let arrValHolder = arr.map(function (arrVal) {
    let first = arrVal[0];
    let last = arrVal[arrVal.length - 1];
    return `${first}${last}`;
  });
  return arrValHolder;
}
let myFirstAndLast = showFirstAndLast(["hi", "goodbye", "smile"]);
console.log(`show first and last`, myFirstAndLast);
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, 
and a value and returns the array passed to the function with the new key 
and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'},
     {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
  let keyValue = arr.map(function (arrObj) {
    arrObj[key] = value;
    return arrObj;
  });
  return keyValue;
}

let addKeyAndValueHolder = addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);
console.log(` add key and value`, addKeyAndValueHolder);

/*
Write a function called vowelCount which accepts a string and returns an 
object with the keys as the vowel and the values 
as the number of times the vowel appears in the string. 
This function should be case insensitive so a 
lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
  let newStr = str.toLowerCase();
  let keys = "aeiou"; // keys  as the vowel
  let object = {};
  newStr.split("").forEach(function (key) {
    if (keys.indexOf(key) !== -1) {
      if (key in object) {
        object[key]++;
      } else {
        object[key] = 1;
      }
    }
  });
  return object; //returns an object
}
let vowelHolder = vowelCount("I Am awesome and so are you"); // it accept a string
console.log(` vowel count`, vowelHolder);
/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with 
all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
  let mapValue = arr.map(function (doubleValueMap) {
    return doubleValueMap * 2;
  });
  return mapValue;
}
let doubleValueMapsHolder = doubleValuesWithMap([1, 2, 3]);
console.log(` double value `, doubleValueMapsHolder);

/*
Write a function called valTimesIndex which accepts an array and returns a new 
array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  let newValTimesIndex = [];
  arr.forEach(function (value, index) {
    newValTimesIndex.push(value * index);
  });
  return newValTimesIndex;
}

let valTimesIndexHolder = valTimesIndex([1, 2, 3]);
console.log(valTimesIndexHolder);

/*
Write a function called extractKey which accepts an array of objects and 
some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')
     // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
  newArray = [];
  arr.forEach(function (obj) {
    newArray.push(obj[key]); // or object.name//values
  });
  return newArray;
}
extractKeyHolder = extractKey(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "name"
);
console.log(extractKeyHolder);

/*
Write a function called extractFullName which accepts an array of objects 
and returns a new array with the value of the key with a name of "first" 
and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"},
     {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele"}]) 
      // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
  let newArray = [];

  arr.forEach(function (value) {
    newArray.push(`${value.first} ${value.last}`);
  });
  return newArray;
}
let extractFullNameHolder = extractFullName([
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele" },
]);
console.log(extractFullNameHolder);

/*
Write a function called filterByValue which accepts an array 
of objects and a key and returns a new array with
 all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"},
     {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"}, 
      {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner')
       // [{first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
  let newArray = arr.filter(function (obj) {
    return obj[key];
  });
  return newArray;
}
let filterByValueHolder = filterByValue(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true },
  ],
  "isCatOwner"
);
console.log(filterByValueHolder);

/*
Write a function called find which accepts an array and 
a value and returns the first element in the array that has the 
same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
  let newArray = [];
  arr.forEach(function (i) {
    if (i === searchValue) {
      newArray.push(i);
    } else {
      return -1;
    }
  });
  return newArray[0];
}
let findHolder = find([1, 2, 3, 4, 5], 3);
console.log(findHolder);
/*
Write a function called findInObj which accepts an array of 
objects, a key, and some value to search for and returns
 the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"},
     {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) 
      // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
  let newObj = arr.filter(function (obj) {
    if (obj[key] === searchValue) {
      return obj[key];
    }
  });
  return newObj[0];
}

let findInObjHolder = findInObj(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true },
  ],
  "isCatOwner",
  true
);
console.log(newArray);

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
  let newStr = str.toLowerCase();
  let vowels = "aeiou";
  let newStrHolder = newStr.split("").filter(function (strLetters) {
    return vowels.indexOf(strLetters) === -1;
  });
  return newStrHolder.join("");
}
let removeVowelsHolder = removeVowels("TIM");
console.log(removeVowelsHolder);

/*
Write a function called doubleOddNumbers which accepts an array and
 returns a new array with all of the odd numbers 
 doubled (HINT - you can use map and filter to double
   and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  let oddNumberHolder = arr.filter(function (oddNumber) {
    return oddNumber % 2 === 1;
  });
  let newHolderDouble = oddNumberHolder.map(function (oddNumberDouble) {
    return oddNumberDouble * 2;
  });
  return newHolderDouble;
}
let doubleOddNumbersHolder = doubleOddNumbers([1, 2, 3, 4, 5]);
console.log(doubleOddNumbersHolder);
