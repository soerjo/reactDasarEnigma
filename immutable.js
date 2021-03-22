const profile = {
  nama: "suryo",
  age: 24,
  gender: "laki-laki",
};

//melakukan copy pada object dengan {...namaObject}
const profile2 = { ...profile };
profile.age = 25;

console.log(profile);
console.log(profile2);

const profile3 = profile;
profile3.nama = "soerjo"; ///jadi ngeganti aslinya juga
//padahal kita maunya ndak mau mengubah dari profile asli
//jadi jangan pakai cara ini

console.log(profile);
console.log(profile3);

const arr1 = ["suryo", "soerjo", "hastomo"];

//melakukan copy pada array dengan {...namaArray}
const arr2 = [...arr1];
arr2.push("bambang");

console.log(arr1);
console.log(arr2);
