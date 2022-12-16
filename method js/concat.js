// concat = menggabung array ataupun object
const arr1 = ["macan", "singa", "serigala", "beruang", "buaya"];
const arr2 = ["ular", "rubah", "heyna", "cheetah", "jaguar"];
const binatangBuas = arr1.concat(arr2);

const array1 = [1, 2, [3, 4]];
const array2 = [{ 1: "hallo" }, 7, 8];
const array3 = array1.concat(array2);

const obj1 = {
  a: "sejarah",
  b: "biologi",
};
const obj2 = {
  c: "mtk",
  d: "kimia",
};

console.log(binatangBuas);
// console.log(array3);

// console.log(...arr1, ...arr2);
