import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  /* debemos cambiar la estructura porque ya no queremos recibir si no guardar datos. */
  const response = fetch(urlApi, {
    method: 'POST', /* tiene que ir en mayúscula */
    mode: 'cors', /* permisos que va a tener la petición. cors por defecto */
    credentials: 'same-origin', /* es opcional ya que lo va a tener por defecto */
    headers: {
      'Content-Type': 'application/json'
    }, /* son las cabeceras de la solicitud para que nos reconozca. debemos especificar qué tipo de valor estamos enviando*/
    /* el body es la información que yo le quiero trasmitir a la api */
    body: JSON.stringify(data) /* este método convierte un objeto o valor JS en una cadena de texto */
  });
  return response;
}

/* En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST */

const data = {
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"]
}

/* usamos el postData para transmitir la información y crear el nuevo producto, usándolo también como una promesa y utilizando el .then para obtener la respuesta y mostrarla como un objeto json en consola */
postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));

  /* Para ver el objeto creado en el navegador, copiamos la dirección: https://api.escuelajs.co/api/v1/products/ y colocamos al final el número arrojado por la id del OUTPUT */

