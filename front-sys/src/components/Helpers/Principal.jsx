import CardClientes from "./Cards/CardClientes"
import CardProductos from "./Cards/CardProductos"
import CardProveedores from "./Cards/CardProveedores"
import { Outlet} from "react-router-dom"

const Principal = () =>{
    return(
        <section className="cards">
            <CardClientes/>
            <CardProductos/>
            <CardProveedores/>
            <Outlet />
        </section>
    )
}

export default Principal;