import express from 'express';
import { crearProveedor,mostrarProveedores,mostrarProveedor } from '../controllers/controllerProveedor.js';

const proveedorRouter = express.Router();

proveedorRouter.post('/', crearProveedor);
proveedorRouter.get('/', mostrarProveedores);
proveedorRouter.get('/:id', mostrarProveedor);

export default proveedorRouter