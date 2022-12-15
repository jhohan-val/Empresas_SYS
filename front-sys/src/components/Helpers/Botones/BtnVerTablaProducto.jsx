import { Link } from "react-router-dom";

const BtnVerProductos = () => {
    return(
        <section>
            <Link to={'/productos/tablaProductos'} className="btn-ver" type="button" value="Ver" placeholder="Ver">Ver Productos</Link>
        </section>
    )
}

export default BtnVerProductos;