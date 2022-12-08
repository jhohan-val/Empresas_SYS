import express from 'express';
import dataBaseClientes from './database/databaseClientes.js';
import clienteRouter from './routers/routersCliente.js';
import productoRouter from './routers/routersProducto.js';
import proveedorRouter from './routers/routersProveedor.js';
import cors from 'cors';

const app = express();
const port = 2002;

try {
    await dataBaseClientes.authenticate()
    console.log(`Coneccion exitosa a la base de datos`)
} catch (error) {
    console.log(`CONECCION no exitosa: ${error}`)
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