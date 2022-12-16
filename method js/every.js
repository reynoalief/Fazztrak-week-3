//mengecek semua indeks, apabila ada yang tidak sesuai 1 maka error

const ages = [32, 33, 16, 40];

console.log(ages.every(checkAge)); //ada callback asynch di methode every

function checkAge(age) {
  return age > 18;
}
