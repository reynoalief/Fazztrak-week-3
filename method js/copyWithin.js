/*
metode menyalin elemen array ke posisi lain dalam array.
metode menimpa nilai-nilai yang ada.
metode tidak menambahkan item ke array.

*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let a = fruits.copyWithin(3, 0); // (target, start)

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let b = fruits2.copyWithin(2, 0, 2); //(targer, start, end)

console.log(a);
