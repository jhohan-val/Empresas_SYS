import BtnRegistar from "../Botones/BtnRegistar BtnRegistar";
import BtnVer from "../Botones/BtnVer";
import IconoClientes from "../imagenes/IconoClientes";

const AsideClientes = () => {
    return(
        <section className="clientes">
            <aside>
                <IconoClientes/>
                <h3>Clientes</h3>
                <BtnRegistar/>
                <BtnVer/>
            </aside>
        </section>
    )
}

export default AsideClientes;