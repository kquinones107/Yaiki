const express = require('express');
const mongoose = require('mongoose'); // O MySQL, según la base de datos
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON en las solicitudes

// Conexión a la base de datos MongoDB (puedes cambiar por MySQL si prefieres)
mongoose.connect('mongodb://localhost:27017/jewelrydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((error) => {
  console.error('Error al conectar con MongoDB', error);
});

// Modelo de Mongoose para un diseño
const DesignSchema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  material: String,
  occasion: String
});

const Design = mongoose.model('Design', DesignSchema);

// Ruta para obtener todos los diseños
app.get('/designs', async (req, res) => {
  try {
    const designs = await Design.find();
    res.json(designs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo diseño
app.post('/designs', async (req, res) => {
  const { name, type, color, material, occasion } = req.body;
  const newDesign = new Design({ name, type, color, material, occasion });
  try {
    await newDesign.save();
    res.status(201).json(newDesign);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
