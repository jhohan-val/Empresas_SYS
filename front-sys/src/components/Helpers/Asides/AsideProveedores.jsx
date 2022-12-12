import BtnAgregar from "../Botones/BtnAgregar";
import BtnVer from "../Botones/BtnVer";
import IconoProveedores from "../imagenes/IconoProveedores";

const AsideProveedores = () => {
    return(
        <section>
            <aside>
                <IconoProveedores/>
                <h3>Proveedores</h3>
                <BtnAgregar/>
                <BtnVer/>
            </aside>
        </section>
    )
}

export default AsideProveedores;