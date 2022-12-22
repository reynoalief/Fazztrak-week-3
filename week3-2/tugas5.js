let dataUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await fetch("https://jsonplaceholder.typicode.com/users");
      // console.log(result.ok);
      if (result.ok) {
        let data = await result.json();
        resolve(
          data.map((biodata) => {
            return biodata.name;
          })
        );
      } else {
        return reject({
          message: "Failed to get data",
          // data: [],
        });
      }
    } catch (error) {
      console.log(`${error}`);
    }
  });
};

dataUsers()
  .then((item) => {
    console.log(item);
  })
  .catch((err) => {
    console.log(err);
  });
