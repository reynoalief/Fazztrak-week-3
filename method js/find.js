//mencari satu nilai yang lebih dari target

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 5;
}

console.log(ages.find(checkAge));
