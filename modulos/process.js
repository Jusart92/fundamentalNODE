// const process = require('process');

process.on("beforeExit", () => {
  console.log("Arturo, el proceso va a terminar");
});

process.on("exit", () => {
  console.log("Arturo, el proceso ababó");
  setTimeout( ()=>{
    console.log("Esto nuca sera ejecutado");
  },0)
});

setTimeout(()=> {console.log("Esto si sera visible")},0);

process.on("uncaughtException", (err, orgigen)=>{
  console.log("Vaya se nos ha olvidado capturar un error");
  console.error(err.message);
});

// functionQueNoExiste()
console.log("Esto si el error no sa recoge, no sale");