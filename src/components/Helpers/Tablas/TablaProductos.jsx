const TablaProductos = () => {
    return(
        <section className="productos" id="productos">
            <table className="tabla-productos" id="tabla-productos">
                <thead className="thead">
                    <tr className="tr">
                        <td>Nombre</td>
                        <td>Fragancia</td>
                        <td>Referencia</td>
                        <td>Tamaño</td>
                        <td>Cantidad</td>
                        <td>Fabricante</td>
                        <td>Acción</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>Blue</td>
                        <td>Dulce</td>
                        <td>81935</td>
                        <td>Grande</td>
                        <td>10</td>
                        <td>Coco Chanel</td>
                        <td>Eliminar</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default TablaProductos;