import axios from 'axios'
import btneliminar from '../../../../public/borrar.png'

const BtnEliminarProveedores = () => {

const eliminarProveedores = async(id, e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:2002/proveedores${id}`)
    .then(res => console.log('Eliminado', res))
    .catch(error => console.log(`Conexion no exitosa: ${error}`))
}

    return(
        <section className='btn-accion'>
            <img onClick={eliminarProveedores(proveedores.id)} className="img-eliminar" src={btneliminar} alt="eliminar" type="button" value="eliminar"/>
        </section>
    )
}

export default BtnEliminarProveedores;