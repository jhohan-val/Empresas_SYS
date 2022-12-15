import BtnVerProductos from "../Botones/BtnVerTablaProducto";
import IconoProductos from "../imagenes/IconoProductos";

const AsideProductos = () => {
    return(
        <section className="productos">
            <aside >
                <IconoProductos/>
                <h3>Productos</h3>
                <BtnVerProductos/>
            </aside>
        </section>
    )
}

export default AsideProductos;