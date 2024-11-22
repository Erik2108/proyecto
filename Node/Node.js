const express = require('express');
const mysql = require('mysql2'); // Usar mysql2 en lugar de mysql
const cors = require('cors'); 

const app = express();
const port = 3000;

// Configurar conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Tu contraseña de MySQL
    database: 'personalchef'
});

// Conectar a la base de datos
connection.connect(err => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');
});

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta para obtener los productos
app.get('/productos', (req, res) => {
    connection.query('SELECT * FROM producto', (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).json({ message: 'Error en la consulta a la base de datos' });
        }
        res.status(200).json(results);
    });
});

// Ruta para insertar un nuevo producto
app.post('/productos', (req, res) => {
    const { id_producto, nombre, descripcion, precio, categoria, imagen_url } = req.body;

    const query = `
        INSERT INTO producto (id_producto, nombre, descripcion, precio, categoria, imagen_url)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [id_producto, nombre, descripcion, precio, categoria, imagen_url], (err, result) => {
        if (err) {
            console.error('Error al insertar el producto:', err);
            return res.status(500).json({ message: 'Error al insertar el producto' });
        }

        res.json({
            message: 'Producto insertado correctamente',
            insertedId: result.insertId
        });
    });
});

// Ruta para eliminar un producto
app.delete('/productos/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM producto WHERE id_producto = ?`;

    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error al eliminar el producto:', err);
            return res.status(500).json({ message: 'Error al eliminar el producto' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json({
            message: 'Producto eliminado correctamente',
            deletedId: id
        });
    });
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
