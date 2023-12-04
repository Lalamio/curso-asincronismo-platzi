const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve('Async!'), 3000)
      : reject(new Error('error!'));
  }); /* se usó un operador ternario y se fuerza con true al principio del condicional para que se cumpla el setTimeout*/
}

const anotherFn = async () => {
  /* el término async será el cuerpo de la función */
  /* await estará dentro de la lógica a implementar */
  const something = await fnAsync(); /* esta función nos está regresando una promesa */
  console.log(something); /* se imprime mientras espera */
  console.log("oye!");
}

console.log('before'); /* al ir antes del llamado de la función podremos hacer que se imprima primero */
anotherFn(); /* es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada */
console.log('after'); /* aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene gracias al funcionamiento de async y await, sino que sigue y así tenemos 'After' de segundo al imprimir */

/*La salida al correr con Run Code queda:
Before
After
Async!!
Hello!
*/