const TablaClientes = () => {
    return(
        <section className="clientes" id="clientes">
            <table class="tabla-clientes" id="tabla-clientes">
                        <thead class="thead">
                            <tr class="tr">
                                <td>Nombre</td>
                                <td>Documento</td>
                                <td>Correo</td>
                                <td>Dirección</td>
                                <td>Barrio</td>
                                <td>Teléfono</td>
                                <td>Acción</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jaime</td>
                                <td>123456789</td>
                                <td>jaimezapata@gmail.com</td>
                                <td>Calle 19</td>
                                <td>Centro</td>
                                <td>3117451454</td>
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

export default TablaClientes;