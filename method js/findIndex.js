//menampilkan index dari setiap array yang lebih besar dari 18

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18; //indek 20 adalah ke 3
}
console.log(ages.findIndex(checkAge));
