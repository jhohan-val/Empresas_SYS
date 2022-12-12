const FormularioProductos = () => {
    return(
        <section className="registro">
            <form  action="">
                <h1 className="titulo">Registrando productos</h1>
                <input class="form-item" placeholder="Nombre" type="text" />
                <input class="form-item" placeholder="Tipo de fragancia" type="text" />
                <input class="form-item" placeholder="Referencia" type="text" />
                <input class="form-item" placeholder="Tamaño" type="text" />
                <input class="form-item" placeholder="Cantidad" type="text" />
                <input class="form-item" placeholder="Fabricante" type="text" />
                <input class="btn-form-productos" type="submit" value="Agregar" />
            </form>
        </section>

    )
}
export default FormularioProductos;