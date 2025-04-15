//Array de canales de venta
const canales = [
    {id:"1", nombre: "Local"},
    {id:"2", nombre: "Online"},
    {id:"3", nombre: "Otro"},
]

//Array de paises
const paises = [
    {id: 1, nombre: "Argentina"},
    {id: 2, nombre: "Bolivia"},
    {id: 3, nombre: "Brasil"},
    {id: 4, nombre: "Chile"},
    {id: 5, nombre: "Paraguay"},
    {id: 6, nombre: "Uruguay"},
]

//Formulario vacío
let resumen = [];

//Bienvenida
alert("¡Bienvenida a nuestro formulario online para sumarte como revendedora!");

//Nombre
const nombre = prompt("Ingresa tu nombre")
resumen.push(nombre)
//Apellido
const apellido = prompt("Ingresá tu apellido")
resumen.push(apellido)
//DNI
const dni = Number(prompt("Ingresá tu DNI"))
resumen.push(dni)
//Instagram
const ig = prompt("Ingresá tu Instagram")
resumen.push(ig)
//Teléfono
const telefono = prompt("Ingresá tu celular")
resumen.push(telefono)
//Canal de venta
function mostrarCanales() {
    let canalVenta = "¿Cuál es tu canal de venta actual o preferido para comenzar un nuevo emprendimiento?(ingresá su número):\n"
        canales.forEach((canales) => {
            canalVenta += `${canales.id}- ${canales.nombre}\n`;
        });
    return canalVenta;
}
const canal = prompt(mostrarCanales())
resumen.push(canal);

//País 1-argentina 2-bolivia 3-brasil 4-chile 5-paraguay 6-uruguay
function mostrarPaises() {
    let paisElegido = "¿De dónde sos?(ingresá su número):\n";
    paises.forEach((paises) => {
        paisElegido += `${paises.id}- ${paises.nombre}\n`;
    });
    return paisElegido;
}
const pais = prompt(mostrarPaises())
resumen.push(pais)

//Mensaje 
const mensaje = prompt("Dejanos un comentario...")
resumen.push(mensaje)

//Finalizar
console.log(resumen)
//console.log("que bueno que te quieras sumar a nuestra familia ")

/* console.log(`Que bueno que te quieras sumar a nuestra familia 
     ${resumen.nombre} +${resumen.apellido}. Esperamos haber tomado nota correctamente..
    Tu DNI es: ${resumen.dni}
   Tu Instagram es: ${resumen.ig}
    Tu celular es: ${resumen.telefono}
    El canal de venta elegido es ${resumen.canal} `
 ) */