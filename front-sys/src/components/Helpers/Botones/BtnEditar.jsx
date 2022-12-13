import btneditar from '../../../../public/editar.png'

const BtnEditar = () => {
    return(
        <section className='btn-accion'>
           <img className="img-editar" src={btneditar} alt="editar" type="button" value="editar"/>
        </section>
    )
}

export default BtnEditar;
