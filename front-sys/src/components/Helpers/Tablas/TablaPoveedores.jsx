import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";

const TablaProveedores = () => {
    return (
        <section className="proveedores" id="proveedores">
            <table className="tabla-proveedores" id="o">
                <thead className="thead">
                    <tr className="tr">
                        <td className="td-proveedores">Nombre</td>
                        <td className="td-proveedores">Nit</td>
                        <td className="td-proveedores">Correo</td>
                        <td className="td-proveedores">Dirección</td>
                        <td className="td-proveedores">Teléfono</td>
                        <td className="td-proveedores">Producto</td>
                        <td className="td-proveedores">Acción</td>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <tr className="tr">
                        <td className="td-proveedores">Jaime</td>
                        <td className="td-proveedores">123456789</td>
                        <td className="td-proveedores">jaimezapata@gmail.com</td>
                        <td className="td-proveedores">Calle 19</td>
                        <td className="td-proveedores">3117451454</td>
                        <td className="td-proveedores">Envases de perfumes</td>
                        <td className="d-flex">
                            <BtnEliminar/>
                            <BtnEditar/>
                        </td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
}

export default TablaProveedores;