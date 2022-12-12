import AsideClientes from "../Helpers/Asides/AsideClientes";
import CardClientes from "../Helpers/Cards/CardClientes";
import CardProductos from "../Helpers/Cards/CardProductos";
import CardProveedores from "../Helpers/Cards/CardProveedores";
import Footer from "../Helpers/Footer";
import Header from "../Helpers/Header";
import Login from "../Helpers/Login";
import TablaClientes from "../Helpers/Tablas/TablaClientes";

const Main = ()  =>{
    return (
        <section>
            
            <main>
                {/* LOGIN */}
                {/* <section className="login">
                    <Login/>
                </section> */}
                
                {/* HEADER */}
                <section className="header">
                    <Header/>  
                </section>

                                                                                    {/* PRINCIPAL */}
                {/* <section className="cards">
                    <CardClientes/>
                    <CardProductos/>
                    <CardProveedores/>
                </section> */}

                                                                                    {/*CLIENTES */}
                <section className="vista-clientes">
                <section className="aside-agg-clientes">
                    <AsideClientes/>
                </section>
                <section form-clientes>

                </section>

                <section className="tabla-clientes">

                </section>
                </section>
                
                                                                                    {/* PRODUCTOS */}
                {/* <section className="agregar-productos">

                </section> */}

                                                                                    {/* PROVEEDORES */}
                {/* <section className="agregar-proveedores"></section> */}
                

                                                                                    {/* FOOTER */}
                <section className="footer">
                    <Footer/>
                </section>
            </main> 

        </section>
    )
}

export default Main;

