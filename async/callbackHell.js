function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log(`Hola ${nombre}`);
    miCallback(nombre);
  }, 1000);
}
function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1);
}
function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback){
  if(veces >= 0){
    hablar(function(){
      conversacion(nombre, --veces, callback);
    });
  }else {
    adios(nombre,callback);
  }
}

console.log("Iniciando proceso");
hola("Arturo",function(nombre){
  conversacion(nombre,30,function(){
    console.log("Proceso Terminado");
  });
})

// -- callback hell
// hola("Arturo", (nombre) => {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, () => {
//           console.log("Terminando Proceso");
//         });
//       });
//     });
//   });
// });


