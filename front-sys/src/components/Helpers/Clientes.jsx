import AsideClientes from "./Asides/AsideClientes";
import FormularioClientes from "./Formularios/FormularioClientes";
import TablaClientes from "./Tablas/TablaClientes";
import TablaProductos from "./Tablas/TablaProductos";

const Clientes = () =>{
    return(
        <section className="vista-clientes">
                <AsideClientes/>
                {/* <FormularioClientes/> */}
                {/* <TablaClientes/> */}
                <TablaProductos/>
        </section>
    )
}

export default Clientes;