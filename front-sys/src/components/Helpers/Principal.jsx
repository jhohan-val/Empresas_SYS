import CardClientes from "./Cards/CardClientes"
import CardProductos from "./Cards/CardProductos"
import CardProveedores from "./Cards/CardProveedores"
import Header from "./Header"
import Footer from "./Footer"

const Principal = () =>{
    return(
        <section>
            <Header />
                <section className="vista-principal">
                    <section className="cards">
                        <CardClientes/>
                        <CardProductos/>
                        <CardProveedores/>
                    </section>
                </section>
            <Footer />
        </section>
    )
}

export default Principal;