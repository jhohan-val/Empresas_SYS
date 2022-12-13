import AsideProveedores from "./Asides/AsideProveedores";
import FormularioProveedores from "./Formularios/FormularioProveedores";
import TablaProveedores from "./Tablas/TablaPoveedores";

const Proveedores = () => {
    return(
        <section className="vista-proveedores">
                    <AsideProveedores/>
                    {/* <FormularioProveedores/> */}
                    <TablaProveedores/>
                </section>
    )
}

export default Proveedores;