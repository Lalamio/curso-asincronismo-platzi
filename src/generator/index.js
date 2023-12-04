/* declaración de la función del generador */
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

/* para poder iterar con el generador, se inicializa un valor con la función generadora */
const g = gen();
/* .next es un método que nos permite iterar por cada uno de los elementos que estén dentro de la función generadora */
console.log(g.next().value); /* imprime yield 1 */

/* next() permite acceder a la función del generador y obtener con yield dos valores: ++value++ y el estado de ++done++, es decir si tenemos yield 1; y mandamos a imprimir el resultado con next() obtenemos `{value: 1, done: false}':

~ El 1 por el valor al lado derecho del primer yield.
~ Y done es false porque mientras haya otro yield por operar será falso.
~ Será true cuando se ejecute cuatro veces next() y la salida mostrará {value: undefined, done: true}. Ésto se debe a que ya no hay mas nada que mostrar, porque se mandó a imprimir un cuarto elemento y el generador solo tiene 3 yield.

Para obtener solo el valor de value, se escribe next().value */

console.log(g.next().value); /* imprime yield 2 */
console.log(g.next().value);/* imprime yield 3 */
console.log(g.next()); /* imprime undefined en value y done: true ya que no hay más elementos para iterar */


/* ejemplo usando for... of */
function* iterate(array) {
  for (let value of array) { /* el loop del for of revisa cada elemento del array */
    yield value; /* value es asignado en cada ciclo */
  }
}

const it = iterate(['oscar', 'omar', 'ana', 'carolina', 'andre']);
console.log(it.next()); /* oscar */
console.log(it.next());/* omar */
console.log(it.next());/* ana */
console.log(it.next());/* carolina */
console.log(it.next());/* andre */
console.log(it.next());/* value: undefined, done: true*/
