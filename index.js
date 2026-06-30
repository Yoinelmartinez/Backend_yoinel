import express from 'express';

const app = express();
const port = 3000;
const host = '10.5.225.45';

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido al sistema de gestión.' });
});

app.get('/aprendices', (req, res) => {
    res.json({
        aprendices: ['Juan', 'Pedro', 'María', 'Ana', 'Luis']
    });
});

app.get('/programas', (req, res) => {
    res.json({
        programas: ['Ética', 'Matemáticas', 'Programación', 'Comunicación', 'Inglés']
    });
});

app.listen(port, host, () => {
    console.log(`Servidor escuchando en http://${host}:${port}`);
});