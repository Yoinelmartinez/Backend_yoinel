const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido al Sistema de Gestion Academica');
});

// Ruta aprendices
app.get('/aprendices', (req, res) => {
    res.send('Gestion de aprendices del centro de formacion');
});

// Ruta programas
app.get('/programas', (req, res) => {
    res.send('Gestion de programas de formacion');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});