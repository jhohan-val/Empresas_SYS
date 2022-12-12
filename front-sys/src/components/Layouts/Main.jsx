import AsideClientes from "../Helpers/Asides/AsideClientes";
import AsideProductos from "../Helpers/Asides/AsideProductos";
import AsideProveedores from "../Helpers/Asides/AsideProveedores";
import CardClientes from "../Helpers/Cards/CardClientes";
import CardProductos from "../Helpers/Cards/CardProductos";
import CardProveedores from "../Helpers/Cards/CardProveedores";
import Footer from "../Helpers/Footer";
import FormularioClientes from "../Helpers/Formularios/FormularioClientes";
import FormularioProductos from "../Helpers/Formularios/FormularioProductos";
import FormularioProveedores from "../Helpers/Formularios/FormularioProveedores";
import Header from "../Helpers/Header";
import Login from "../Helpers/Login";
import TablaClientes from "../Helpers/Tablas/TablaClientes";
import TablaProveedores from "../Helpers/Tablas/TablaPoveedores";
import TablaProductos from "../Helpers/Tablas/TablaProductos";

const Main = ()  =>{
    return (

            <main >
                {/* LOGIN */}
                {/* <section className="login">
                    <Login/>
                </section> */}

                                                     {/* PRINCIPAL */}
                {/* <section className="cards">
                    <CardClientes/>
                    <CardProductos/>
                    <CardProveedores/>
                </section> */}

                                                    {/*CLIENTES */}
              {/*  <section className="vista-clientes">
                <AsideClientes/>
                <FormularioClientes/>
                </section> */}
                

                                                    {/* PRODUCTOS */}
                {/* <section className="vista-productos">
                    <AsideProductos/>
                    <FormularioProductos/>
                </section> */}

                

                                                   {/* PROVEEDORES */}
                <section className="vista-proveedores">
                    <AsideProveedores/>
                    <FormularioProveedores/>
                </section>
         
            </main> 

      
    )
}

export default Main;

