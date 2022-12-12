import AsideProductos from "./Asides/AsideProductos";
import FormularioProductos from "./Formularios/FormularioProductos";
import TablaProductos from "./Tablas/TablaProductos";

const Productos = () =>{
    return(
        <section className="vista-productos">
                   <AsideProductos/>
                   <FormularioProductos/>
                   <TablaProductos/>
        </section>
    )
}

export default Productos;