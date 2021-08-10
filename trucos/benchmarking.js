let suma = 0;

console.time('bucle');
for(let i=0; i<100000000; i++){
  suma ++
}

console.timeEnd('bucle');

console.time('asincrono');
asincrona().then( () => {
  console.timeEnd('asincrono');
})


let suma2 = 0;

console.time('bucle 2');
for(let j=0; j<100000000; j++){
  suma2 ++
}

console.timeEnd('bucle 2');

function asincrona() {
  return new Promise( (resolve)=>{
    setTimeout( ()=> {
      console.log('Termina funcion');
      resolve();
    },1 )
  })
}