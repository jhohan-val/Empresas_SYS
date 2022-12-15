import btneliminar from '../../../../public/borrar.png'

const BtnEliminar = () => {
    return(
        <section className='btn-accion'>
            <img className="img-eliminar" src={btneliminar} alt="eliminar" type="button" value="eliminar"/>
        </section>
    )
}

export default BtnEliminar;