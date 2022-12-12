const FormularioClientes = () => {
    return(
        <section className="registro-clientes">
            <form className="form-clientes" action="">
                <h1 className="titulo-clientes">Registrando Clientes</h1>
                <input class="form-item" placeholder="Nombre" type="text" />
                <input class="form-item" placeholder="Documento" type="text" />
                <input class="form-item" placeholder="Correo" type="email" />
                <input class="form-item" placeholder="Dirección" type="text" />
                <input class="form-item" placeholder="Barrio" type="text" />
                <input class="form-item" placeholder="Teléfono" type="tel" />
                <input class="btn-form-clientes" type="submit" value="Agregar" />
            </form>
        </section>
        
    )
}
export default FormularioClientes;