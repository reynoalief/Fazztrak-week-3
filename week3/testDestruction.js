// destuction bject in object

const obj = {
  a: 1,
  b: { c: 2 },
};
const {
  a,
  b: { c: d },
} = obj;
console.log(d);
