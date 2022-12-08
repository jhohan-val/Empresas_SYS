import Proveedores from "../models/modelProveedores.js"

const crearProveedor = async (req, res)=>{
    try {
        await Proveedores.create(req.body)
        res.json({
            message: 'Proveedor creado correctamente'
        })
    } catch (error) {
        res.json({
            message: 'No se pudo registrar' + error 
        })
    }
}

async function mostrarProveedores (req, res) {
    try {
        const proveedores = await Proveedores.findAll()
        res.json(proveedores)
    } catch (error) {
        res.json({
        Message: 'base de datos vacia'
    })
    }
}

const mostrarProveedor = async (req, res)=>{
    try {
        const proveedores= await Proveedores.findOne({where: {id: req.params.id}})
        res.json(proveedores)
    } catch (error) {
        res.json({
            Message: 'El Proveedor no existe en la base de datos' + error
        })
    }
}

export {
    crearProveedor, mostrarProveedores, mostrarProveedor
}