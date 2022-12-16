let result = "";

function nilaiCheck(nilaiAwal, nilaiAkhir, dataArray) {
  let nilai = (nilaiAwal, nilaiAkhir, dataArray);
  let sortNumber = dataArray.sort((a, b) => {
    return a - b;
  });
  if (isNaN(nilaiAwal) && isNaN(nilaiAkhir)) {
    result = "semua nilai harus number";
  } else if (nilaiAwal > nilaiAkhir) {
    result = "Nilai akhir harus lebih besar dari nilai awal";
  } else if (dataArray.length < 5) {
    result = "Jumlah angka dalam dataArray harus lebih dari 5";
  } else {
    if (condition) {
      
    } else {
      let filter = dataArray.filter((data) => {
        return data > 5 && data < 20;
      });
      console.log(filter);
    }
  }
  return result;
}

console.log(nilaiCheck(5, 20, [2, 25, 4, 14, 17, 30, 8]));
// console.log(nilaiCheck(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// console.log(nilaiCheck([2, 25, 4]));
// console.log(nilaiCheck([2, 25, 4, 1, 30, 18]));
