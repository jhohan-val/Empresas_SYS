import BtnRegistar from "../Botones/BtnRegistar BtnRegistar";
import BtnVer from "../Botones/BtnVer";
import IconoProductos from "../imagenes/IconoProductos";

const AsideProductos = () => {
    return(
        <section className="productos">
            <aside >
               <IconoProductos/>
                <h3>Productos</h3>
                <BtnRegistar/>
                <BtnVer/>
            </aside>
        </section>
    )
}

export default AsideProductos;