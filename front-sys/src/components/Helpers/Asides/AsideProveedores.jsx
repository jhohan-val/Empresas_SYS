import BtnVerProveedores from "../Botones/BtnVerTablaProveedores";
import IconoProveedores from "../imagenes/IconoProveedores";

const AsideProveedores = () => {
    return(
        <section>
            <aside>
                <IconoProveedores/>
                <h3>Proveedores</h3>
                <BtnVerProveedores/>
            </aside>
        </section>
    )
}

export default AsideProveedores;