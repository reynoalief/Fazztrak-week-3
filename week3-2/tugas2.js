// let hasil = "";
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 4000);

    // return (hasil = "object");
  });
};

cekHariKerja("sabtu")
  .then((data) => {
    // console.log(`${data} adalah hari kerja`);
  })
  .catch((err) => {
    // console.log(err);
  });

//then berguna untuk meng eksekusi resolve, dimana meresolve ini menghasilkan result data
//dan catch meng eksekusi error code

// try-catch
//cara1
// async function cekhari(params) {
//   const result = await cekHariKerja("sabtu");
//   // return result;
//   // console.log(result);
// }
// console.log(cekhari());

//cara 2
//await withhout async
// const result = await cekHariKerja("senin");
// console.log(result);

//cara 3
async function cekhari() {
  // return result;
  try {
    const result = await cekHariKerja("senin");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

cekhari();

//try berfungsi untuk mengatasi asycn await resolve, dimana hasil dari try adalah result hari kerja
//catch untuk mengatasi error handling reject
