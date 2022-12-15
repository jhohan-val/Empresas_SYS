import AsideClientes from "./Asides/AsideClientes";
import FormularioClientes from "./Formularios/FormularioClientes";

const Clientes = () => {
    return(
        <section className="vista-clientes">
            <AsideClientes/> 
            <FormularioClientes/>
        </section>
    )
}

export default Clientes;