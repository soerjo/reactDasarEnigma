let ditepati = true;
const janji = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("janji ditepati");
  } else {
    reject("ingkar janji");
  }
});

janji
  .then((response) => console.log(response))
  .catch((response) => console.log(response));
