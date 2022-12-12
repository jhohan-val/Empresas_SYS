import BtnAgregar from "../Botones/BtnAgregar";
import BtnVer from "../Botones/BtnVer";
import IconoClientes from "../imagenes/IconoClientes";

const AsideClientes = () => {
    return(
        <section className="clientes">
            <aside className="aside-clientes">
                <IconoClientes/>
                <h3 class="h3clientes">Clientes</h3>
                <BtnAgregar/>
                <BtnVer/>
            </aside>
        </section>
    )
}

export default AsideClientes;