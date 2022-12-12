import express from 'express';
import { crearCliente, mostrarClientes, mostrarCliente, editarCliente, eliminarCliente } from '../controllers/ControllerClientes.js';

const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente);
clienteRouter.get('/', mostrarClientes);
clienteRouter.get('/:id', mostrarCliente);
clienteRouter.put('/:id', editarCliente);
clienteRouter.delete('/:id', eliminarCliente);

export default clienteRouter