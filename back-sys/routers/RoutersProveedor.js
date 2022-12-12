import express from 'express';
import { crearProveedor,mostrarProveedores,mostrarProveedor, editarProveedor, eliminarProveedor } from '../controllers/ControllerProveedor.js';

const proveedorRouter = express.Router();

proveedorRouter.post('/', crearProveedor);
proveedorRouter.get('/', mostrarProveedores);
proveedorRouter.get('/:id', mostrarProveedor);
proveedorRouter.put('/:id', editarProveedor);
proveedorRouter.delete('/:id', eliminarProveedor);

export default proveedorRouter