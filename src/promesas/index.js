/* 🛠️ ++Para crear una promesa:++ . Utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros: resolve y reject. */

/* El parámetro ++resolve++ se utiliza para cuando la promesa devuelve el valor correctamente */
/* El parámetro ++reject++, se usa en el que caso de que no funcione. . 📝 ++Ejemplo:++ */

const promise = new Promise(function (resolve, reject) {
  resolve('hey!');
});

/* ejemplo de contar vacas */

const cows = 10;

const countCows = new Promise(function (resolve, reject) {
  /* sólo si el número es mayor que 10, se llama el resolve */
  /* de lo contrario, se llama a reject */
  if(cows > 10 ) {
    resolve(`we have ${cows} cows on the farm`);
  } else {
    reject('theres is no cows on the farm');
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log('finally');
});

/* finally se activa, independientemente del resultado de la promesa, cuando la operación ha terminado */