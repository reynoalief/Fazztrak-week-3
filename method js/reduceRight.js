//mengurangi dari kanan
const numbers = [175, 50, 25];

console.log(numbers.reduceRight(myFunc));

function myFunc(total, num) {
  return total - num;
}
