const cekSuhu = (celcius) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let suhu = celcius;
      if (isNaN(suhu)) {
        console.log("harus berupa angka");
      } else {
        if (suhu == 36 || suhu == 37) {
          resolve("suhu anda normal");
        } else if (suhu < 36) {
          console.log("suhu anda dibawah normal, anda terkena hipotermia");
        } else if (suhu > 37) {
          console.log(
            "suhu anda diatas normal, bisa jadi anda terkena covid 25"
          );
        } else {
          reject(new Error("error logic"));
        }
        //   resolve(cek);
      }
    }, 3000);
  });
};

cekSuhu(40)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
