import Clientes from "../models/ModelCliente.js";

const crearCliente = async (req, res)=>{
    try {
        await Clientes.create(req.body)
        res.json({
            message: 'cliente creado correctamente'
        })
    } catch (error) {
        res.json({
            message: 'No se pudo registrar' + error 
        })
    }
}

async function mostrarClientes (req, res) {
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
    try {
        const clientes = await Clientes.findOne({where: {id: req.params.id}})
        res.json(clientes)
    } catch (error) {
        res.json({
            Message: 'El cliente no existe en la base de datos' + error
        })
    }
}

export {
    crearCliente, mostrarClientes, mostrarCliente
}