import BtnVerClientes from "../Botones/BtnVerTablaClientes";
import IconoClientes from "../imagenes/IconoClientes";

const AsideClientes = () => {
    return(
        <section className="clientes">
            <aside>
                <IconoClientes/>
                <h3>Clientes</h3>
                <BtnVerClientes/>
            </aside>
        </section>
    )
}

export default AsideClientes;