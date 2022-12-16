let data = {
  id: 1,
  nama: "Leanne Graham",
  Username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt.556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

let newData = {
  ...data,
  nama: "M. Raynoalief Ridwan Ar Rhojabi",
  email: "rayno@gmail.com",
  hobby: "coding",
};
console.log(newData);

//destruction

let { street, city } = data.address;
console.log(street, city);

let {
  address: { street: jalan },
  address: { city: kota },
} = data;

console.log(jalan, kota);
