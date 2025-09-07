const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Middleware para registrar las solicitudes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Rutas básicas
app.get('/api/tareas', (req, res) => {
    res.send('Listar tareas');
});

// Endpoint para crear una nueva tarea
app.post('/api/tareas', (req, res) => {
    const nuevaTarea = req.body;
    // Aquí se agregaría la lógica para guardar la nueva tarea
    res.status(201).send(nuevaTarea);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send({ status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});