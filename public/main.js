document.getElementById('guardar-resumen').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const dni = document.getElementById('dni').value;
  const ig = document.getElementById('ig').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;
  const pais = document.getElementById('pais').value;

  const canalVenta = document.querySelector('input[name="canal-venta"]:checked')?.nextElementSibling.textContent || 'No seleccionado';

  const datosFormulario = {
    nombre,
    apellido,
    dni,
    ig,
    telefono,
    canalVenta,
    pais,
    mensaje
  };

  // Guardar en localStorage
  localStorage.setItem('formularioActual', JSON.stringify(datosFormulario));

  alert("Datos guardados en localStorage.");
});

document.getElementById('mostrar-resumen').addEventListener('click', () => {
  const datos = JSON.parse(localStorage.getItem('formularioActual'));

  if (!datos) {
    document.querySelector('.h3-resumen').textContent = 'Resumen: No hay datos guardados.';
    return;
  }

  document.querySelector('.h3-resumen').textContent = `Que bueno que te quieras sumar a nuestra familia ${datos.nombre}.\n 
    Esperamos haber tomado nota correctamente..\n
    Resumen:\n
    Nombre: ${datos.nombre}\n
    Apellido: ${datos.apellido}\n
    D.N.I: ${datos.dni}\n
    Instagram: ${datos.ig}\n
    Teléfono: ${datos.telefono}\n
    Canal de venta: ${datos.canalVenta}\n
    País: ${datos.pais}\n
    Mensaje: ${datos.mensaje}`;
});

let baseDeDatos = [];

document.getElementById('enviar-datos').addEventListener('click', () => {
  const datos = JSON.parse(localStorage.getItem('formularioActual'));

  if (!datos) {
    alert('No hay datos para enviar.');
    return;
  }

  fetch('http://localhost:3000/guardar-datos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
    .then(response => response.json())
    .then(data => {
      alert(data.mensaje);
    })
    .catch(error => {
      console.error('Error al enviar:', error);
    });
});