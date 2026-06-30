const express = require('express');

const app = express();

const PORT = 3000;
const HOST = '10.5.225.45';

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: "Bienvenido al Sistema de Gestión Académica"
    });
});

// Ruta de aprendices
app.get('/aprendices', (req, res) => {
    res.json({
        mensaje: "Gestión de aprendices del centro de formación"
    });
});

// Ruta de programas
app.get('/programas', (req, res) => {
    res.json({
        mensaje: "Gestión de programas de formación"
    });
});

// Iniciar servidor
app.listen(PORT, HOST, () => {
    console.log(`Servidor ejecutándose en:`);
    console.log(`http://${HOST}:${PORT}`);

});