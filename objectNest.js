const person = {
  nama: "soerjo",
  place: {
    country: "Indonesia",
    city: "Jakarta",
  },
  freinds: ["laptop", "hp", "istri komputer"],
};

//menambah properti pada object
person.place["postalCode"] = 21225;
console.log(person);

//menambah properti pada object - cara2
const person2 = { place: { ...person.place } };
person2.place.address = "jl. Wijaya";
console.log(person2);

//menambah properti pada array object
const orang = { friends: [...person.freinds] };
console.log(orang);
orang.friends.push("jubaedah");
console.log(orang);
