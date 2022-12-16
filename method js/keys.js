//mendapatkan index array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "\n";
}

// console.log(text);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const keys2 = Object.keys(fruits2);

let text2 = "";
for (let x2 of keys2) {
  text2 += x2 + "\n";
}

// console.log(text2);
