// Write a function called extractOnlyValue which accepts an array of
// objects and a key and returns a new array with the value of each object at
// the key

const arr1 = [{ name: "Patrick" }, { name: "Bob" }, { name: "John" }];
// 1 ----------------------------------------------------------------

// let extractOnlyValue = (arr, key) => {
//   return arr.reduce((acc, curr) => {
//     acc.push(curr[key]);
//     return acc;
//   }, []);
// };
// console.log(extractOnlyValue(arr1, "name"));
// 2 ---------------------------------

// const OnlyVowels = (str) => {
//   let vowels = "aioeu";
//   return str
//     .toLowerCase()
//     .split("")
//     .reduce((acc, cur) => {
//       if (vowels.includes(cur)) {
//         acc[cur] ? acc[cur]++ : (acc[cur] = 1);
//       }
//       return acc;
//     }, {});
// };
// console.log(OnlyVowels("hola amigos"));

// 3 --------
// let addKeyAndValue = (arr, key, value) => {
//   return arr.reduce((acc, curr, index) => {
//     acc.push(curr);
//     acc[index][key] = value;

//     return acc;
//   }, []);
// };
// console.log(addKeyAndValue(arr1, "status", "student"));

//* secind way

let addKeyAndValue = (arr, key, value) => {
  return arr.reduce((acc, curr) => {
    curr[key] = value;
    acc.push(curr);
    return acc;
  }, []);
};
console.log(addKeyAndValue(arr1, "status", "student"));
