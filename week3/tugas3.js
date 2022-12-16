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

function searchName(nama, limit, callback) {
  let lowerName = name.map((hurufKecil) => {
    return hurufKecil.toLowerCase();
  });

  let filterNama = lowerName.filter(
    (namaTarget) => namaTarget.indexOf(nama) !== -1
  );

  filterNama = filterNama.slice(0, limit);
  callback(filterNama);
}

function showResult(data) {
  console.log(data);
}

searchName("an", 3, showResult);
