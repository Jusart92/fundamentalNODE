let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || "no tiene w"

console.log(`Hola ${nombre} y mi sitio web es: ${web}`);