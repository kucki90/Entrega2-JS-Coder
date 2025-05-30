const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const filePath = path.join(__dirname, 'datos.json');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para recibir los datos y guardarlos
app.post('/guardar-datos', (req, res) => {
  const nuevoDato = req.body;

  // Leer archivo existente
  fs.readFile(filePath, 'utf8', (err, data) => {
    let datosExistentes = [];

    if (!err && data) {
      datosExistentes = JSON.parse(data);
    }

    datosExistentes.push(nuevoDato);

    // Escribir datos actualizados
    fs.writeFile(filePath, JSON.stringify(datosExistentes, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ mensaje: 'Error al guardar' });
      }
      res.status(200).json({ mensaje: 'Datos guardados correctamente' });
    });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});