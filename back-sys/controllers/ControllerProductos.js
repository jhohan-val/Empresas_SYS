import Productos from "../models/ModelProductos.js";

const crearProdcuto = async (req, res)=>{
    try {
        await Productos.create(req.body)
        res.json({
            message: 'producto creado correctamente'
        })
    } catch (error) {
        res.json({
            message: 'No se pudo registrar' + error 
        })
    }
}

async function mostrarProductos (req, res) {
    try {
        const Prodcutos = await Productos.findAll()
        res.json(Prodcutos)
    } catch (error) {
        res.json({
        Message: 'base de datos vacia'
    })
    }
}

const mostrarProducto = async (req, res)=>{
    try {
        const Prodcuto = await Productos.findOne({where: {id: req.params.id}})
        res.json(Prodcuto)
    } catch (error) {
        res.json({
            Message: 'El producto no existe en la base de datos' + error
        })
    }
}

export {
    crearProdcuto, mostrarProductos, mostrarProducto
}