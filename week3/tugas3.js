const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
//sorting
// name.sort();

function searchName(nama, limit, callback) {
  //logic filter nama dengan kondisi lowercase dimana index
  let filterNama = name.filter((namaTarget) =>
    namaTarget.toLowerCase().includes(nama.toLowerCase())
  );
  //logic kondisi limit
  filterNama = filterNama.slice(0, limit);
  callback(filterNama);
}
// callback menampilkan hasil
function showResult(data) {
  console.log(data);
}

searchName("an", 3, showResult);
