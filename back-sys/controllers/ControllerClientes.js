import { Sequelize } from "sequelize";
import Clientes from "../models/ModelCliente.js";

const crearCliente = async (req, res)=>{
    try {
        await Clientes.create(req.body)
        res.json({
            message: 'cliente creado correctamente'
        })
    } catch (error) {
        res.json({
            message: 'No se pudo registrar. ' + error 
        })
    }
}

const mostrarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll()
        res.json(clientes)
    } catch (error) {
        res.json({
        Message: 'base de datos vacia'
    })
    }
}

const mostrarCliente = async (req, res)=>{
    const { Op } = Sequelize
    try {
        const clientes = await Clientes.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id},
                {document: req.params.id}
                ]
            }
        })
        res.json(clientes)
    } catch (error) {
        res.json({
            Message: 'El cliente no existe en la base de datos. ' + error
        })
    }
}

const editarCliente = async (req, res) => {
    const { Op } = Sequelize
    try {
        await Clientes.update(req.body, {
            where: {
                [Op.or]: [
                {id: req.params.id },
                {documento: req.params.id }
                ]
            }
        })
        res.json({
            message: 'Cliente editado correctamente'
        })
    } catch (error) { 
        res.json({ message: 'No se pudo editar. ' + error })
    }
}

const eliminarCliente = async (req, res) => {
    const { Op } = Sequelize
    try {
        await Clientes.destroy({
            where: {
                [Op.or]: [
                {id: req.params.id },
                {documento: req.params.id }
                ]
            }
        })
        res.json({ message: 'Cliente eliminado correctamente'
        })
    } catch (error) {
        res.json({ message: 'No se pudo eliminar. ' + error })
    }
}

export {
    crearCliente, 
    mostrarClientes, 
    mostrarCliente,
    editarCliente,
    eliminarCliente
}