import Proveedores from "../models/ModelProveedores.js"

const crearProveedor = async (req, res)=>{
    try {
        await Proveedores.create(req.body)
        res.json({
            message: 'Proveedor creado correctamente'
        })
    } catch (error) {
        res.json({ message: 'No se pudo registrar' + error })
    }
}

const mostrarProveedores = async  (req, res) => {
    try {
        const proveedores = await Proveedores.findAll()
        res.json(proveedores)
    } catch (error) {
        res.json({ Message: 'Base de datos vacia.' })
    }
}

const mostrarProveedor = async (req, res)=>{
    try {
        const proveedores= await Proveedores.findOne({
            where: {id: req.params.id}
        })
        res.json(proveedores)
    } catch (error) {
        res.json({ message: 'El Proveedor no existe en la base de datos.' + error })
    }
}

const editarProveedor = async (req, res) => {
    try {
        Proveedores.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            message: 'Proveedor editado correctamente'
        })
    } catch (error) { 
        res.json({ message: 'No se pudo editar' + error })
    }
}

const eliminarProveedor = async (req, res) => {
    try {
        await Proveedores.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: 'Proveedor eliminado correctamente'
        })
    } catch (error) {
        res.json({ message: 'No se pudo eliminar' + error })
    }
}

export {
    crearProveedor, 
    mostrarProveedores, 
    mostrarProveedor, 
    editarProveedor,
    eliminarProveedor
}