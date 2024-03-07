const os = require("os");
// console.log(os.platform());
// funciones autoejecutables
(function () {
    console.log("Hola");
}());
// --------------------------------------------
(function (name) {
    console.log(`¡Hola, ${name}`);
}("Diego"));