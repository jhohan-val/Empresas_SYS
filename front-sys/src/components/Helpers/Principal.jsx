import CardClientes from "./Cards/CardClientes"
import CardProductos from "./Cards/CardProductos"
import CardProveedores from "./Cards/CardProveedores"

const Principal = () =>{
    return(
        <section className="cards">
            <CardClientes/>
            <CardProductos/>
            <CardProveedores/>
        </section>
    )
}

export default Principal;