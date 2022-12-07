const FormularioClientes = () =>{
    return(

        <section className="registro-clientes">
            <form className="clientes" action="">
                <input class="form-item" placeholder="Nombre" type="text" />
                <input class="form-item" placeholder="Documento" type="text" />
                <input class="form-item" placeholder="Correo" type="email" />
                <input class="form-item" placeholder="Dirección" type="text" />
                <input class="form-item" placeholder="Barrio" type="text" />
                <input class="form-item" placeholder="Teléfono" type="tel" />
                <input class="btnGuardar" type="submit" value="Agregar" />
            </form>
        </section>
        
    )
}

export default FormularioClientes;