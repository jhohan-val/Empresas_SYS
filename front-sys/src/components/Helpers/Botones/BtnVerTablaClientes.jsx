import { Link } from "react-router-dom";

const BtnVerClientes = () => {
    return(
        <section>
            <Link to={'/clientes/tablaClientes'} className="btn-ver" type="button" value="Ver" placeholder="Ver">Ver</Link>
        </section>
    )
}

export default BtnVerClientes;