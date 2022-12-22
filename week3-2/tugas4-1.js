const cekUmur = (umur) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(umur)) {
        console.log("harus berupa angka");
      } else {
        if (umur > 15) {
          resolve("anda sudah dewasa");
        } else {
          reject(new Error("anda belum cukup usia"));
        }
        //   resolve(cek);
      }
    }, 3000);
  });
};

cekUmur(37)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
