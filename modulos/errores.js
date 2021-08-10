function otraFunction() {
  serompe();//los errores se capturan en forma de burbuja
}

function serompe() {
  return 3 + z;  
}

function seRompeAsincrona(cb) {
  setTimeout(()=>{
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi función asíncrona");
      cb(err);
    }
  },1000)
}

try{
  // otraFunction();
  seRompeAsincrona((err)=>{
    console.log(err.message)
  })
}catch(err) {
  console.error("algo se ha roto..." );
  console.error(err.message);
}

console.log("Algo al final");