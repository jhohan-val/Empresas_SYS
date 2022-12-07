const FormularioProveedores = () => {
    return(

        <section className="registro-proveedores">
            <form className="proveedores" action="">
                <input class="form3_item" placeholder="Nombre" type="text" />
                <input class="form3_item" placeholder="Nit" type="text" />
                <input class="form3_item" placeholder="Correo" type="email" />
                <input class="form3_item" placeholder="Dirección" type="text" />
                <input class="form3_item" placeholder="Teléfono" type="tel" />
                <input class="form3_item" placeholder="Producto" type="text" />
                <input class="btnGuardar" type="submit" value="Agregar" />
            </form>
        </section>

    )
}