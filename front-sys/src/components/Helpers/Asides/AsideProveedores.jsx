import BtnRegistar from "../Botones/BtnRegistar BtnRegistar";
import BtnVerProveedores from "../Botones/BtnVerTablaProveedores";
import IconoProveedores from "../imagenes/IconoProveedores";

const AsideProveedores = () => {
    return(
        <section>
            <aside>
                <IconoProveedores/>
                <h3>Proveedores</h3>
                <BtnRegistar/>
                <BtnVerProveedores/>
            </aside>
        </section>
    )
}

export default AsideProveedores;