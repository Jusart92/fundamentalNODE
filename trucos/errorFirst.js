function asincrona(callback) {
  //
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err);
    }
  }, 1000);
}
// try {
asincrona((err, dato) => {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    return false;
    // throw err; //No sirve en funciones asíncronas.
  }
  console.log("todo ha ido bien, mi data es", dato);
});
// } catch (e) {
//   console.error("Hemos capturado un error");
//   console.error(e);
// }
