function hola(nombre, miCallback) {
  setTimeout(function ( ) {
    console.log(`Hola ${nombre}`);
    miCallback(nombre)
  }, 1000);
}

const adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    otroCallback();
  },1000);
}

console.log("Iniciando proceso");
hola("Arturo", (nombre) => {
  adios(nombre, () =>{
    console.log("Terminando Proceso");
  })
});