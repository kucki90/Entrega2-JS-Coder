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
/* const nombre = prompt("Ingresa tu nombre")
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
const telefono = Number(prompt("Ingresá tu celular"))
resumen.push(telefono)
//Canal de venta
function mostrarCanales() {
    let canalVenta = "¿Cuál es tu canal de venta actual o preferido para comenzar un nuevo emprendimiento?(ingresá su número):\n"
        canales.forEach((canales) => {
            canalVenta += `${canales.id}- ${canales.nombre}\n`;
        });
    return canalVenta;
}

const selectorCanales = prompt(mostrarCanales()) -1;
const canal = canales[selectorCanales].nombre
resumen.push(canal);

//Paísi
function mostrarPaises() {
    let paisElegido = "¿De dónde sos?(ingresá su número):\n";
    paises.forEach((paises) => {
        paisElegido += `${paises.id}- ${paises.nombre}\n`;
    });
    return paisElegido;
}
const selectorPais = prompt(mostrarPaises()) -1;
const pais = paises[selectorPais].nombre;
resumen.push(pais);

//Mensaje 
const mensaje = prompt("Dejanos un comentario...")
resumen.push(mensaje)

//Finalizar
const fin = confirm("gracias por completar el formulario! Nos estaremos poniendo en contacto a la brevedad")

//console.log(resumen)
console.log(`Que bueno que te quieras sumar a nuestra familia ${nombre} ${apellido}.\n 
    Esperamos haber tomado nota correctamente..\n
    DNI: ${dni}\n
    Instagram: ${ig}\n
    Celular: ${telefono}\n
    Canal de venta elegido: ${canal}\n 
    País: ${pais}\n
    Mensaje: ${mensaje}\n`
 ) */
/* let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let dni = document.getElementById("dni").value;
let ig = document.getElementById("ig").value;
let telefono = document.getElementById("telefono").value;
let canal = document.getElementById("canal").value;
let pais = document.getElementById("pais").value;
let mensaje = document.getElementById("mensaje").value;
 */

let botonEnviar = document.getElementById("enviar-resumen");
let nodoResumen = document.querySelector(".h3-resumen");
botonEnviar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let dni = document.getElementById("dni").value;
let ig = document.getElementById("ig").value;
let telefono = document.getElementById("telefono").value;
// Obtener el radio button seleccionado

const seleccionado = document.querySelector(

    'input[name="canal-venta"]:checked'
    
    );
    
    // Obtener el texto del canal de venta seleccionado
    
    let canalVentaTexto = "";
    
    if (seleccionado) {
    
    // Obtener el texto de la etiqueta asociada al radio button
    
    const labelFor = seleccionado.id;
    
    const label = document.querySelector(`label[for="${labelFor}"]`);
    
    canalVentaTexto = label ? label.textContent : "No seleccionado";
    
    } else {
    
    canalVentaTexto = "No seleccionado";
    
    }
/* let canal = document.getElementById("canal").value; */
let pais = document.getElementById("pais").value;
let mensaje = document.getElementById("mensaje").value;
    nodoResumen.textContent = `Que bueno que te quieras sumar a nuestra familia ${nombre} ${apellido}.\n 
    Esperamos haber tomado nota correctamente..\n
    DNI: ${dni}\n
    Instagram: ${ig}\n
    Celular: ${telefono}\n
    Canal de venta elegido: ${canalVentaTexto}\n
    País: ${pais}\n
    Mensaje: ${mensaje}\n
  `;
});