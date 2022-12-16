// var
// console.log(namaDepan);// jika dilakukan maka undefine
var namaDepan = "rayno";
namaDepan = "alief";
// console.log(namaDepan);

{
  var buku = "sejarah";
}
// console.log(buku); //bisa dilakukan dluar scope

// let
// console.log(namaBelakang);//jika dilakukan maka eror
let namaBelakang = "ridwan";

{
  let makanan = "roti";
  //   console.log(makanan); //bisa dilakukan didalam scope
}
// console.log(makanan);//tidak bisa dilakukan di luar scope

//ekspresion pasti menghasilkan nilai dan dapat muncul dimanapun
//statetment merujuk pada aksi, dan bagian tertentu tidak bisa menjadi ekspresion

// let hello = let world //error karena world merupakan statement

// let panjang = 5;
// let lebar = panjang;
// console.log(lebar);

let atas = (bawah = 50);
// console.log(atas);

// let namaBelakang = "ar rhojabi";//akan eror jika merubah value
// console.log(namaBelakang);

// const
const namaTengah = "rangga";
// console.log(namaTengah);

// console.log(namaTengah);//error jika dilakukan
// namaTengah = "sasuke";
// console.log(namaTengah);//error jika ada perubahan data

// console.log(tanpaDeklarasi);
tanpaDeklarasi = "Hallo";
// tanpaDeklarasi = "Joy";
// console.log(tanpaDeklarasi);

// console.log(tanpaDeklarasi2);
{
  tanpaDeklarasi2 = "hai";
}
