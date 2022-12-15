import AsideProductos from "./Asides/AsideProductos";
import FormularioProductos from "./Formularios/FormularioProductos";

const Productos = () =>{
    return(
        <section className="vista-productos">
            <AsideProductos/>
            <FormularioProductos/>
        </section>
    )
}

export default Productos;