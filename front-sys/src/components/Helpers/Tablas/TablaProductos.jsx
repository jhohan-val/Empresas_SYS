const TablaProductos = () => {
    return(
        <section className="productos" id="productos">
            <table className="tabla-productos" id="tabla-productos">
                <thead className="thead">
                    <tr className="tr">
                        <td className="td-productos">Nombre</td>
                        <td className="td-productos">Fragancia</td>
                        <td className="td-productos">Referencia</td>
                        <td className="td-productos">Tamaño</td>
                        <td className="td-productos">Cantidad</td>
                        <td className="td-productos">Fabricante</td>
                        <td className="td-productos">Acción</td>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <tr className="tr">
                        <td className="td-productos">Blue</td>
                        <td className="td-productos">Dulce</td>
                        <td className="td-productos">81935</td>
                        <td className="td-productos">Grande</td>
                        <td className="td-productos">10</td>
                        <td className="td-productos">Coco Chanel</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default TablaProductos;