//assynchrounus pada js ada:
// callback
// promise
// async await

function add(number1, number2) {
  setTimeout(() => {
    let result = number1 + number2;
    console.log(result);
  }, 2000);
}

function multi(numberFromAdd) {
  return numberFromAdd * 2;
}

let nilaiResultAdd = add(2, 3);
console.log(nilaiResultAdd);
let resultAll = multi(nilaiResultAdd);
console.log(resultAll);
//si resultAll ndak dapat data karena si function add masih nunggu 2 detik buat ngeluarin datanya

//CallBack
function tambah(a, b, myCallback) {
  setTimeout(() => {
    let hasil = a + b;
    // return myCallback(hasil);
    console.log(myCallback(hasil));
  }, 1000);
}

function lipatGanda(hasilTambah) {
  return hasilTambah * 2;
}

let hasilAkhir = tambah(2, 3, lipatGanda);
// console.log(hasilAkhir);
