//mengecek beberapa nilai indeks secara berurutan sampai menemukan kondisi yang diinginkan

const ages = [3, 10, 18, 20];

console.log(ages.some(checkAdult));
function checkAdult(age) {
  return age > 19;
}
