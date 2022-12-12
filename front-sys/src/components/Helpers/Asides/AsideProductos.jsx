import BtnAgregar from "../Botones/BtnAgregar";
import BtnVer from "../Botones/BtnVer";
import IconoProductos from "../imagenes/IconoProductos";

const AsideProductos = () => {
    return(
        <section className="productos">
            <aside >
               <IconoProductos/>
                <h3>Productos</h3>
                <BtnAgregar/>
                <BtnVer/>
            </aside>
        </section>
    )
}

export default AsideProductos;