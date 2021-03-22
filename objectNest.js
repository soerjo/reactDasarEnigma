const person = {
  nama: "soerjo",
  place: {
    country: "Indonesia",
    city: "Jakarta",
  },
  freinds: ["laptop", "hp", "istri komputer"],
};

person.place["postalCode"] = 21225;
console.log(person);
console.log(person.nama);
console.log(person.place.postalCode);
