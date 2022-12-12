import express from 'express';
import { crearProdcuto, editarProducto, eliminarProducto, mostrarProducto, mostrarProductos } from '../controllers/ControllerProductos.js';

const productoRouter = express.Router();

productoRouter.post('/', crearProdcuto);
productoRouter.get('/', mostrarProductos);
productoRouter.get('/:id', mostrarProducto);
productoRouter.put('/:id', editarProducto);
productoRouter.delete('/:id', eliminarProducto);

export default productoRouter 