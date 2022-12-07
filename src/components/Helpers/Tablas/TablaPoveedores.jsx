const TablaProveedores = () => {
    return(
        <section className="proveedores" id="proveedores">
            <table className="tabla-proveedores" id="o">
                <thead className="thead">
                    <tr className="tr">
                        <td>Nombre</td>
                        <td>Nit</td>
                        <td>Correo</td>
                        <td>Dirección</td>
                        <td>Teléfono</td>
                        <td>Producto</td>
                        <td>Acción</td>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                                <td>Jaime</td>
                                <td>123456789</td>
                                <td>jaimezapata@gmail.com</td>
                                <td>Calle 19</td>
                                <td>3117451454</td>
                                <td>Envases de perfumes</td>
                                <td>Eliminar</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
            </table>

        </section>
    )
}

export default TablaProveedores;