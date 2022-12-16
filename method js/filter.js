const ages = [2, 25, 4, 14, 17, 30, 8];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age > 5 && age < 20;
}
console.log(result);
