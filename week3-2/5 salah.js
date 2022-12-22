let dataUsers = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return reject({
            message: "Failed to get data",
            data: [],
          });
        }
      })
      .catch((err) => {});
  })
    .then((users) => {
      return resolve({
        message: "Successfull get data",
        data: data.map((dataProfile) => {
          return dataProfile.name;
        }),
      });
    })
    .catch((err) => {
      return reject({
        message: "FAil",
      });
    });
};
