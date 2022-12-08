import express from 'express';
import { crearProdcuto, mostrarProducto, mostrarProductos } from '../controllers/controllerProductos.js';

const productoRouter = express.Router();

productoRouter.post('/', crearProdcuto);
productoRouter.get('/', mostrarProductos);
productoRouter.get('/:id', mostrarProducto);

export default productoRouter 