const mobil = {
  nama: "avanza",
  brand: "toyota",
  warna: "silver",
};

const { brand, ...car } = mobil;
console.log(car);
console.log(brand);

//destructure Array
const arr = ["egi", "reza", "soerjo", "doni"];
const [nama1, ...namas] = arr;
console.log(nama1);
console.log(namas);

//mendapatkan index awal dan akhir
const names = ["egi", "reza", "soerjo", "doni"];
const first = names[0];
const last = names[names.length - 1];
console.log(names);
console.log(first);
console.log(last);

//mendapatkan index awal dan akhir dengan destructur
const [names1, , , names2] = names;
console.log(names);
console.log(names1);
console.log(names2);
