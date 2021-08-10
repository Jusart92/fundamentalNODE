function hola(nombre) {
  return new Promise((resolve, reject) =>{
    setTimeout(function () {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
}
function hablar(nombre) {
  return new Promise( (resolve,reject)=>{
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      // resolve(nombre);
      reject(' error al hablar');
    }, 1);
  });
}
function adios(nombre) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

//Ejecución
console.log("Iniciando el proceso");

hola("Arturo")
.then(hablar)
.then(adios)
.then((nombre)=> {
  console.log("Terminado el proceso");
})
.catch(err =>{
  console.error("Algo salio mal");
  console.error(err);
})