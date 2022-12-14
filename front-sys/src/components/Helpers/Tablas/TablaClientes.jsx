import AsideClientes from "../Asides/AsideClientes";
import BtnEditar from "../Botones/BtnEditar";
import BtnEliminar from "../Botones/BtnEliminar";
import Footer from "../Footer";
import Header from "../Header";

const TablaClientes = () => {
    return (
        
        <section className="clientes" id="clientes">
           <AsideClientes/>
            <table class="tabla-clientes" id="tabla-clientes">
                <thead class="thead">
                    <tr class="tr">
                        <td className="td-clientes">Nombre</td>
                        <td className="td-clientes">Documento</td>
                        <td className="td-clientes">Correo</td>
                        <td className="td-clientes">Dirección</td>
                        <td className="td-clientes">Barrio</td>
                        <td className="td-clientes">Teléfono</td>
                        <td className="td-clientes">Acción</td>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr class="tr">
                        <td className="td-clientes">Jaime</td>
                        <td className="td-clientes">123456789</td>
                        <td className="td-clientes">jaimezapata@gmail.com</td>
                        <td className="td-clientes">Calle 19</td>
                        <td className="td-clientes">Centro</td>
                        <td className="td-clientes">3117451454</td>
                        <td className="d-flex">
                            <BtnEliminar />
                            <BtnEditar />
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
export default TablaClientes;