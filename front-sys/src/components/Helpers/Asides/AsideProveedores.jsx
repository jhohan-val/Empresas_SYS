import BtnRegistar from "../Botones/BtnRegistar BtnRegistar";
import BtnVer from "../Botones/BtnVer";
import IconoProveedores from "../imagenes/IconoProveedores";

const AsideProveedores = () => {
    return(
        <section>
            <aside>
                <IconoProveedores/>
                <h3>Proveedores</h3>
                <BtnRegistar/>
                <BtnVer/>
            </aside>
        </section>
    )
}

export default AsideProveedores;