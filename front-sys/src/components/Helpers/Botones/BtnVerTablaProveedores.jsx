import { Link } from "react-router-dom";

const BtnVerProveedores = () => {
    return(
        <section>
            <Link to={'/proveedores/tablaProveedores'} className="btn-ver" type="button" value="Ver" placeholder="Ver">Ver</Link>
        </section>
    )
}

export default BtnVerProveedores;