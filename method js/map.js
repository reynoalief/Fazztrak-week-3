//membuat array baru dengan kondisi menyesuaikan fungsi

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);

const numbers2 = [65, 44, 12, 4];
const newArr2 = numbers2.map(myFunction);

console.log(newArr2);

function myFunction(num) {
  return num * 10;
}
