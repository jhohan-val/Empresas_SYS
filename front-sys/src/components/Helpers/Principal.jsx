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
                        <section className="card1">
                        <CardClientes/>
                        </section>
                        <section className="card2">
                        <CardProductos/>
                        </section>
                        <section className="card3">
                        <CardProveedores/>
                        </section>
                    </section>
                </section>
            <Footer />
        </section>
    )
}

export default Principal;