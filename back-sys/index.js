import express from 'express';
import dataBase from './database/dataBase.js';
import clienteRouter from './routers/RoutersCliente.js';
import productoRouter from './routers/RoutersProducto.js';
import proveedorRouter from './routers/RoutersProveedor.js';
import cors from 'cors';

const app = express();
const port = 2002;

try {
    await dataBase.authenticate()
    console.log(`Conexion exitosa a la base de datos`)
} catch (error) {
    console.log(`Conexion no exitosa: ${error}`)
}

app.use(cors())
app.use(express.json())

app.use('/clientes', clienteRouter)
app.use('/productos', productoRouter)
app.use('/proveedores', proveedorRouter)

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log(`Servidor funcionando en http://localhost:2002`)
});