Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
console.log(fruits);
