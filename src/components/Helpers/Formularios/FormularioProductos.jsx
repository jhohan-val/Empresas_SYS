const FormularioProductos = () => {
    return(

        <section className="registro-productos">
            <form className="productos" action="">
                <input class="form3_item" placeholder="Nombre" type="text" />
                <input class="form3_item" placeholder="Tipo de fragancia" type="text" />
                <input class="form3_item" placeholder="Referencia" type="text" />
                <input class="form3_item" placeholder="Tamaño" type="text" />
                <input class="form3_item" placeholder="Cantidad" type="text" />
                <input class="form3_item" placeholder="Fabricante" type="text" />
                <input class="btnGuardar" type="submit" value="Agregar" />
            </form>
        </section>

    )
}

export default FormularioProductos;