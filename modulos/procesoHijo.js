const { exec,spawn } = require('child_process');



let proceso = spawn('cmd.exe', ['/c','dir']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) =>{
  console.log("Esta muerto???");
  console.log(proceso.killed);
  console.log(dato.toString())
})
proceso.on("exit", () =>{console.log("el proceso terminó");})
// exec("node ./consola.js", (err,stdout,sterr) => {
//   if(err) {
//     console.error(err.message);
//     return false;
//   }
//   console.log(stdout);
// });