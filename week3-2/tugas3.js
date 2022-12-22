const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    // let error = true;
    let month = [
      "January",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Founds"), []);
    }
  }, 4000);
};

// const showMonth = (err, data) => {
//   if (!err) {
//     data.map((month) => {
//       console.log(month);
//     });
//   } else {
//     console.log(err);
//   }
// };

const showMonth = (err, data) => {
  if (err == null) {
    data.map((month) => {
      console.log(month);
    });
  } else {
    console.log(err);
  }
};

getMonth(showMonth);
