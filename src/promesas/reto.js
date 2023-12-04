import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

/* función que va a recibir como argumento la url que queremos llamar  y esto retornará el llamado de fetch: una promesa  */
function fetchData(urlApi) {
  return fetch(urlApi);
};

/* el llamado */
/* fetchData(`${API}/products`)
  .then(response => response.json()) */
  /* esto transformará la información de respuesta del primer llamado a un objeto json */
  /* .then(products => {
    console.log(products);
  }) */
  /* mostrar la respuesta para saber qué incluye los productos */
  //.then(() => {
    //console.log('oe tú');
  //}) /* se pueden anidar múltiples .then */
  //.catch(error => console.error(error));


fetchData(`${API}/products`) /* < primera solicitud */
  .then(response => response.json())
  .then(products => {
    console.log(products);
    fetchData(`${API}/products/${products[0].id}`)
    /* esta vez sólo queremos ver el primer producto de la primera solicitud*/
  })
  .then(response => response.json()) /* se vuelve a traer la data */ 
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`) /* queremos mostrar la categoría de un producto en particular */
  })
  .then(response => response.json()) /* hay que convertir nuevamente esta petición para poder leerla */
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err)) /* detectar un error */
  .finally(() => console.log("operación terminada"));
  