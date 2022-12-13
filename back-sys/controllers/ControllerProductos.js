import { Sequelize } from "sequelize";
import Productos from "../models/ModelProductos.js";

const crearProdcuto = async (req, res)=>{
    try {
        await Productos.create(req.body)
        res.json({
            message: 'producto creado correctamente'
        })
    } catch (error) {
        res.json({
            message: 'No se pudo registrar. ' + error 
        })
    }
}

const mostrarProductos = async  (req, res) => {
    try {
        const Prodcutos = await Productos.findAll()
        res.json(Prodcutos)
    } catch (error) {
        res.json({
        Message: 'base de datos vacia. '
    })
    }
}

const mostrarProducto = async (req, res)=>{
    const { Op } = Sequelize
    try {
        const Prodcuto = await Productos.findOne({
            where:{
                [Op.or] : [
                {id: req.params.id},
                {referencia: req.params.id }
                ]
            }
        })
        res.json(Prodcuto)
    } catch (error) {
        res.json({
            Message: 'El producto no existe en la base de datos. ' + error
        })
    }
}
const editarProducto = async (req, res) => {
    const { Op } = Sequelize
    try {
        Productos.update(req.body, {
            where: { 
                [Op.or] : [
                {id: req.params.id },
                {referencia: req.params.id }
                ]
            }
        })
        res.json({
            message: 'Producto editado correctamente'
        })
    } catch (error) { 
        res.json({ message: 'No se pudo editar. ' + error })
    }
}

const eliminarProducto = async (req, res) => {
    const { Op } = Sequelize
    try {
        await Productos.destroy({
            where: {
                [Op.or]: [
                {id: req.params.id },
                {referencia: req.params.id }
                ]
            }
        })
        res.json({ message: 'Producto eliminado correctamente'
        })
    } catch (error) {
        res.json({ message: 'No se pudo eliminar. ' + error })
    }
}

export {
    crearProdcuto, 
    mostrarProductos,
    mostrarProducto,
    editarProducto,
    eliminarProducto
}