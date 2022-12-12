import BtnAgregar from "../Botones/BtnAgregar";
import BtnVer from "../Botones/BtnVer";
import IconoProductos from "../imagenes/IconoProductos";

const AsideProductos = () => {
    return(
        <section>
            <aside className="aside-productos">
               <IconoProductos/>
                <h3 className="h3productos">Productos</h3>
                <BtnAgregar/>
                <BtnVer/>
            </aside>
        </section>
    )
}

export default AsideProductos;