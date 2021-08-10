let i = 0;
let intervalo = setInterval(function () {
  console.log("Intervalo");
  if (i ===3){
    clearInterval(intervalo)
  }
  i++;
},1000)

setImmediate(() =>{
  console.log("ahora!");
})

console.log(__dirname);


//Evitar usar global

global.miVariable = "Arturo"

console.log(miVariable);