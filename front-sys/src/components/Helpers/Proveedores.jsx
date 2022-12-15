import AsideProveedores from "./Asides/AsideProveedores";
import FormularioProveedores from "./Formularios/FormularioProveedores";

const Proveedores = () => {

    return(
        <section className="vista-proveedores">
            <AsideProveedores/>
            <FormularioProveedores/>
        </section>
    )
}

export default Proveedores;