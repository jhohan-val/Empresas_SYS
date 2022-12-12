const FormularioProveedores = () => {
    return(
        <section className="registro">
            <form  action="">
                <h1 className="titulo">Registrando proveedores</h1>
                <input class="form-item" placeholder="Nombre" type="text" />
                <input class="form-item" placeholder="Nit" type="text" />
                <input class="form-item" placeholder="Correo" type="email" />
                <input class="form-item" placeholder="Dirección" type="text" />
                <input class="form-item" placeholder="Teléfono" type="tel" />
                <input class="form-item" placeholder="Producto" type="text" />
                <input class="btn-form-proveedores" type="submit" value="Agregar" />
            </form>
        </section>
    )
}

export default FormularioProveedores;